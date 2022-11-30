import {
  AppBar,
  Badge,
  Button,
  Dialog,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { Fragment, forwardRef, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from '../../components/Iconify';
import Label from '../../components/Label';
import { addService, decidedForm, getCategories, getUpSalaryForm } from '../../store/actions';
import { toVND } from '../../utils/formatNumber';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SitterApplication({ sitterId }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { sitterForm } = useSelector((store) => store.sitterReducer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApproveAndClose = () => {
    setOpen(false);
    dispatch(decidedForm(sitterId, true));
    toast.success('Đã chấp nhận đơn');
  };

  const handleRejectAndClose = () => {
    setOpen(false);
    dispatch(decidedForm(sitterId, false));
    toast.success('Đã từ chối đơn');
  };

  useEffect(() => {
    dispatch(getUpSalaryForm(sitterId));
  }, []);

  return (
    <div>
      <MenuItem component={Button} onClick={handleClickOpen} sx={{ color: 'text.secondary' }}>
        <ListItemIcon>
          <Iconify icon="eva:email-outline" width={24} height={24} />
        </ListItemIcon>
        <ListItemText primary="Xem đơn đăng ký" primaryTypographyProps={{ variant: 'body2' }} />
      </MenuItem>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar color="primary" sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Iconify icon="eva:close-fill" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Đơn đăng ký
            </Typography>
            <Button variant="contained" autoFocus color="error" onClick={handleRejectAndClose}>
              Từ chối
            </Button>
            <Button autoFocus color="inherit" onClick={handleApproveAndClose}>
              Duyệt
            </Button>
          </Toolbar>
        </AppBar>
        <Stack direction="column" px={24} py={8} mb={2} spacing={4}>
          <TextField label="Chăm sóc viên" value={sitterForm.sitterEmail} id="name" name="name" variant="outlined" />
          <List
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Danh sách dịch vụ thay đề nghị
              </ListSubheader>
            }
          >
            {sitterForm?.sitterServicesResponseDTOS?.map((service) => (
              <ListItemButton>
                <ListItemIcon>
                  <Label sx={{ mx: 2 }}>EXP: {service.exp}</Label>
                </ListItemIcon>
                <ListItemText primary={service.name} />
                <ListItemIcon>
                  <Typography variant="subtitle2" sx={{ mx: 2 }}>
                    Thay đổi thu nhập từ
                  </Typography>
                  <Label color="error">
                    <span style={{ textDecoration: 'line-through' }}>{toVND(service.price)}</span>
                  </Label>
                  <Typography variant="subtitle2" sx={{ mx: 2 }}>
                    thành
                  </Typography>
                  <Label color="success">{toVND(service.newPrice)}</Label>
                  <Typography variant="subtitle2" sx={{ mx: 2 }}>
                    trong
                  </Typography>
                  <Label color="info">{service.duration} phút</Label>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Dialog>
    </div>
  );
}
