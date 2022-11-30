import {Box, Button, Container, createFilterOptions, InputAdornment, MenuItem, Stack, TextField, Typography} from '@mui/material';
import { ref , getDownloadURL, uploadBytesResumable} from "firebase/storage"
import { useFormik } from 'formik';
import { NumericFormat } from 'react-number-format';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  Upload } from 'antd';

// components
import LinearProgress from '@mui/material/LinearProgress';
import styles from '../customcss/custom.css'
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import { firebase } from '../firebase/firebase';
import { getCategories, getServiceById, updateService } from '../store/actions';
// @mui
let imageUrl= "";
export default function BookingDetail() {
  const dispatch = useDispatch();
  const filter = createFilterOptions();
  const { serviceId } = useParams();
  const { service, categories } = useSelector((store) => store.serviceReducer);
  const [progressPercent, setProgresspercent] = useState(0);
  useEffect(() => {
    dispatch(getServiceById(serviceId));
    dispatch(getCategories());
  }, [serviceId]);
  
  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: service?.name || '',
      duration: service?.duration || '',
      price: service?.price || 0,
      description: service?.description || '',
      url: service?.url || '',
      commission: service?.commission || '',
      categoryId: service?.category?.id || 0,
    },
    onSubmit: (values) => {
      console.log(values);
      if (imageUrl) { 
        values.url = imageUrl 
      } 
      dispatch(updateService({ id: serviceId, ...values }));
      toast.success('Cập nhật thành công');
      imageUrl ="";
    },
    enableReinitialize: true,
  });
const [fileList, updateFileList] = useState([]);
  
  const uploadFile = (file) => {
    if (file !== undefined) {
      
      const storageRef = ref(firebase, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          imageUrl= downloadURL;
          setProgresspercent(0);
        });
      }
    );     
    }
  }
  function checkJpeg(file) {
    return (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')
      && (file.size / 1024 / 1024 < 2)
  }
console.log("dấdfasdfasdfasd",service);
 

  const normFile = (e) => {
    return e.fileList.filter(checkJpeg);
  };
console.log("fileList", fileList);
  const propss = {
    fileList,

    listType: "picture-card",
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      updateFileList(newFileList);
    },

    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJpgOrPng || !isLt2M) {

        if (!isJpgOrPng) { console.log('Vui lòng tải lên ảnh !', '', 'error'); }
        if (!isLt2M) console.log('Ảnh phải nhỏ hơn 2MB!', '', 'error');

      } else uploadFile(file)
      return false;
      
    },

    onChange: (info) => {
      const temp = info.fileList.filter(checkJpeg);
      updateFileList(temp);
      info.fileList = temp;
      console.log("infor ", temp);
    },

  };
  return (
    <Page title="Booking">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Thông tin chi tiết dịch vụ {service?.name}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
        <Box
          src={values.url}
            >
              <div style={styles}> 
              <Upload
              {...propss}
              defaultFileList ={[{uid: '0',name: `${values?.name}.png`, status: 'done', url: values?.url}]}
              accept="image/*"
            >
           {fileList.length < 1 && '+ Upload' }
            </Upload>
            {progressPercent !== 0 ? <LinearProgress color="success" value={progressPercent}/> : null}</div>
            
            </Box>
        </Stack>
        
        <Stack direction="row" justifyContent="space-between" spacing={2} mb={2}>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Tên dịch vụ"
              value={values.name}
              onChange={handleChange}
              id="name"
              name="name"
              variant="outlined"
            />
            <NumericFormat
              label="Giá"
              id="price"
              name="price"
              value={values.price}
              thousandSeparator="."
              decimalSeparator=","
              valueIsNumericString
              onValueChange={(numbericValue) => setFieldValue('price', numbericValue.value)}
              customInput={TextField}
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="start">VND</InputAdornment>,
              }}
            />
          </Stack>

          <Stack direction="column" spacing={4}>
            <TextField
              label="Mã dịch vụ"
              value={service?.id || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              id="categoryId"
              name="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              fullWidth
              label="Danh mục"
              select
              SelectProps={{ MenuProps: { MenuListProps: { style: { width: '100%' } } } }}
            >
              {categories.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            {/* <Autocomplete
              id="categoryId"
              name="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.name);
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    name: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              options={categories}
              getOptionLabel={(option) => {
                console.log(option);
                // Value selected with enter, right from the input
                const category = categories?.find((el) => el.id === option);
                // Add "xxx" option created dynamically
                // if (option.inputValue) {
                //   return option.inputValue;
                // }
                // Regular option
                return option ? category?.name : '';
              }}
              renderOption={(props, option) => <li {...props}>{option?.name}</li>}
              sx={{ width: 300 }}
              freeSolo
              renderInput={(params) => <TextField {...params} label="AC" />}
            /> */}
          </Stack>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Thời gian thuê"
              value={values.duration}
              onChange={handleChange}
              id="duration"
              name="duration"
              InputProps={{
                endAdornment: <InputAdornment position="start">phút</InputAdornment>,
              }}
              variant="outlined"
            />
            <TextField
              label="Chiết khấu"
              value={values.commission}
              onChange={handleChange}
              id="commission"
              name="commission"
              InputProps={{
                endAdornment: <InputAdornment position="start">%</InputAdornment>,
              }}
              variant="outlined"
            />
          </Stack>
          {/* <Stack direction="column" spacing={4}></Stack> */}
          {/* <Box>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                            Dịch vụ sử dụng
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem key={value} disablePadding>
                                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={`Dịch vụ ${value + 1} - 20k`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box> */}
        </Stack>
        <Stack>
          <TextField label="Thông tin thêm" value={service?.description || ''} multiline rows={4} variant="outlined" />
        </Stack>
        <Stack  justifyContent="flex-end" direction="row"  spacing={3} mt={4}>
          <Button variant="contained" onClick={handleSubmit} startIcon={<Iconify icon="fluent:save-24-filled" />}>
            Lưu
          </Button>
          
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/service"
            startIcon={<Iconify icon="mdi:marker-cancel" />}
            color="error"
          >
            Hủy
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
