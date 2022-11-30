import { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Typography,
  Container,
  Box,
  Stack,
  Card,
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  ListItemIcon,
  Rating,
  Stepper,
  Step,
  StepLabel,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { getCustomerById } from '../store/actions';

const steps = ['Đặt lịch', 'Đang thực hiện', 'Hoàn thành'];

export default function BookingDetail() {
  const { customerId } = useParams();
  const dispatch = useDispatch();
  const { customer } = useSelector((store) => store.customerReducer);

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [popupData, setPopupData] = useState({
    title: '',
    url: '',
  });

  useEffect(() => {
    dispatch(getCustomerById(customerId));
  }, [customerId]);

  const [checked, setChecked] = useState([0, 2]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const openImageViewer = useCallback((title, url) => {
    setPopupData({
      title,
      url,
    });
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setPopupData({
      title: '',
      url: '',
    });
    setIsViewerOpen(false);
  };
  return (
    <Page title="Booking">
      <Container>
        <Dialog
          open={isViewerOpen}
          onClose={closeImageViewer}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{popupData.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Box component="img" src={popupData.url} />
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Thông tin chi tiết của khách hàng {customer?.fullName}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Thông tin chi tiết khách hàng
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Card sx={{ width: '50%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Avatar src={customer?.avatarImgUrl} sx={{ width: 80, height: 80 }}>
                  N
                </Avatar>
                <Stack>
                  <Typography variant="h5">{customer?.fullName}</Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    {customer?.phone}
                  </Typography>
                  <Chip
                    sx={{ m: 1 }}
                    label="CMND Mặt trước"
                    onClick={() => openImageViewer('CMND Mặt trước', customer?.frontIdImgUrl)}
                  />
                  <Chip
                    sx={{ m: 1 }}
                    label="CMND Mặt sau"
                    onClick={() => openImageViewer('CMND Mặt sau', customer?.backIdImgUrl)}
                  />
                </Stack>
              </Stack>
            </CardMedia>
          </Card>
          {/* <Card sx={{ width: '30%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Avatar sx={{ width: 80, height: 80 }}>N</Avatar>
                <Stack>
                  <Typography variant="h5">Nhat Thi (SE62321)</Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Nhân viên chăm sóc
                  </Typography>
                  <Rating name="read-only" value={4} readOnly />
                </Stack>
              </Stack>
            </CardMedia>
          </Card> */}
          {/* <Card sx={{ width: '30%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Stack>
                  <Typography variant="h4" color="green">
                    Tổng tiền: +400.000đ
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Đã bao gồm VAT và phụ phí
                  </Typography>
                </Stack>
              </Stack>
            </CardMedia>
          </Card> */}
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing={2} mb={2}>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Họ và Tên"
              value={customer?.fullName || ''}
              key="fullName"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Ngày sinh"
              key="dob"
              value={customer?.dob || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Stack>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Số điện thoại"
              value={customer?.phone || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Stack>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Email"
              key="email"
              value={customer?.email || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Địa chỉ"
              key="address"
              value={customer?.address || ''}
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Stack>

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

        <Stack sx={{ width: '20%', p: 2 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/customer"
            startIcon={<Iconify icon="akar-icons:arrow-back-thick" />}
          >
            Trở về
          </Button>
          <Stack mb={2} />
        </Stack>
      </Container>
    </Page>
  );
}
