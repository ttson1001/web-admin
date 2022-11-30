import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
  } from '@mui/material';

  const sex = [
    {
      value: 'male',
      label: 'Nam'
    },
    {
      value: 'female',
      label: 'Nữ'
    },
    {
        value: 'other',
        label: 'Khác'
    }
  ];

  export const SitterProfileDetails = (props) => {
    const [values, setValues] = useState({
      name: 'Đàm Lệ Huyền',
      username: 'damlehuyen033',
      email: 'huyenledam033@gmail.com',
      phone: '0987654321',
      sex: 'Nữ',
      exp: '10 năm'
    });
  
    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  
    return (
      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="Thông tin có thể thay đổi"
            title="Thông tin chăm sóc viên"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText=""
                  label="Họ và tên"
                  name="name"
                  onChange={handleChange}
                  required
                  value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Tên đăng nhập"
                  name="userName"
                  onChange={handleChange}
                  required
                  value={values.username}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Địa chỉ Email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Số điện thoại"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Kinh nghiệm làm việc"
                  name="experience"
                  onChange={handleChange}
                  required
                  value={values.exp}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Giới tính"
                  name="sex"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.sex}
                  variant="outlined"
                >
                  {sex.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              variant="contained"
            >
              Approve
            </Button>
            <Button color="red" variant="contained">Disapprove</Button>
          </Box>
        </Card>
      </form>
    );
  };
  