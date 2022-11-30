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

const steps = ['Đặt lịch', 'Đang thực hiện', 'Hoàn thành'];

export default function BookingDetail() {
    const { serviceId } = useParams();
    useEffect(() => { }, [serviceId]);

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
    return (
        <Page title="Booking">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Thêm dịch vụ mới vào danh sách
                        </Typography>
                        {/* <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                            Thông tin chi tiết khách hàng
                        </Typography> */}
                    </Box>
                </Stack>
                {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Card sx={{ width: '50%', p: 2 }}>
                        <CardMedia sx={{ width: '100%' }}>
                            <Stack direction="row" justifyContent="space-around" sx={{ width: '100%' }}>
                                <Avatar sx={{ width: 80, height: 80 }}>N</Avatar>
                                <Stack>
                                    <Typography variant="h5">Lê Nguyễn Minh Tinh</Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                        Mã đơn: xxx568
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
                                    <Typography variant="h5">Nhat Thi (SE62321)</Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
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
                                        Tổng tiền: +400.000đ
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                        Đã bao gồm VAT và phụ phí
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardMedia>
                    </Card>
                </Stack> */}
                <Stack direction="row" justifyContent="space-between" spacing={2} mb={2}>
                    <Stack direction="column" spacing={4}>
                        <TextField
                            label="Tên dịch vụ"
                            defaultValue="Nguyen Van A"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            label="Ngày sinh"
                            defaultValue="10/10/1992"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                    </Stack>
                    <Stack direction="column" spacing={4}>
                        <TextField
                            label="Mã dịch vụ"
                            defaultValue="+84 9091234562"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            label="Email"
                            defaultValue="acb@gmail.com"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                    </Stack>
                    <Stack direction="column" spacing={4}>
                        <TextField
                            label="Địa chỉ"
                            defaultValue="Viet Nam"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            label="Mã căn cước công dân"
                            defaultValue="123456789123"
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                        />
                    </Stack>
                    <Stack direction="column" spacing={4}>
                        <TextField
                            label="Bằng cấp"
                            defaultValue="Trung cấp ..."
                            InputProps={{
                                readOnly: false,
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
                <Stack>
                    <TextField
                        label="Ghi chú"
                        defaultValue={'Ghi chú dành cho người được chăm sóc...'}
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </Stack>
                <Stack sx={{ width: '20%', p: 2 }}>
                    <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="fluent:save-24-filled" />}>
                        Lưu
                    </Button>
                    <Stack mb={2} />
                    <Button variant="contained" component={RouterLink} to="/dashboard/user" startIcon={<Iconify icon="mdi:marker-cancel" />} color="error">
                        Hủy
                    </Button>
                </Stack>
            </Container>
        </Page>
    );
}
