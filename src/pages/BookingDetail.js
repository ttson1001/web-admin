import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
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
} from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { getBookingById } from '../store/actions';
import { toVND } from '../utils/formatNumber';

const steps = ['Đặt lịch', 'Đang thực hiện', 'Hoàn thành'];

export default function BookingDetail() {
  const { bookingId } = useParams();
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getBookingById(bookingId));
  }, [bookingId]);

  const { bookingDetail } = useSelector((store) => store.bookingReducer);

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

  const getActiveStep = (status) => {
    let step = -1;
    switch (status) {
      case 'WAITING_FOR_SITTER':
        step = 0;
        break;
      case 'DONE':
        step = 3;
        break;
      case 'SITTER_NOT_FOUND':
        step = -1;
        break;
      default:
        step = 1;
    }
    return step;
  };

  return (
    <Page title="Booking">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Lịch đặt số {bookingId}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Thông tin chi tiết đặt lịch
            </Typography>
          </Box>
        </Stack>
        <Stack mb={2}>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={getActiveStep(bookingDetail?.status || 0)} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Card sx={{ width: '30%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Avatar sx={{ width: 80, height: 80 }}>N</Avatar>
                <Stack>
                  <Typography variant="h5">{bookingDetail?.customerName}</Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Nguời đặt lịch hẹn
                  </Typography>
                </Stack>
              </Stack>
            </CardMedia>
          </Card>
          <Card sx={{ width: '30%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Avatar sx={{ width: 80, height: 80 }}>N</Avatar>
                <Stack>
                  <Typography variant="h5">{bookingDetail?.sitterName}</Typography>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Nhân viên chăm sóc
                  </Typography>
                  <Rating name="read-only" value={4} readOnly />
                </Stack>
              </Stack>
            </CardMedia>
          </Card>
          <Card sx={{ width: '30%', p: 2 }}>
            <CardMedia sx={{ width: '100%' }}>
              <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                <Stack>
                  <Typography variant="h4" color="green">
                    Tổng tiền: {toVND(bookingDetail?.totalPrice)}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Đã bao gồm VAT và phụ phí
                  </Typography>
                </Stack>
              </Stack>
            </CardMedia>
          </Card>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing={2} mb={2}>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Tổng thời gian làm việc (h)"
              value={bookingDetail?.totalTime || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Ngày đặt lịch"
              value={bookingDetail?.startDate || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Stack>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Nơi làm việc"
              value={bookingDetail?.place || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              label="Ngày hoàn thành"
              value={bookingDetail?.endDate || ''}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Stack>

          <Box>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Dịch vụ sử dụng
            </Typography>
            <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
              {bookingDetail?.bookingDetailResponseDTOList?.map(({ id, serviceName, price }) => {
                const labelId = `checkbox-list-label-${id}`;

                return (
                  <ListItem key={id} disablePadding>
                    <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                      <ListItemText id={labelId} primary={`${serviceName} - ${toVND(price)}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Stack>
        <Stack>
          <TextField label="Ghi chú" value={bookingDetail?.description || ''} multiline rows={4} variant="outlined" />
        </Stack>
        <Stack sx={{ width: '20%', p: 2 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/schedule"
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
