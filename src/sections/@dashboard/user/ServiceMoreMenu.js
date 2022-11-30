import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import toast from 'react-hot-toast';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Button } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';
import { changeStatusService } from '../../../store/actions';

// ----------------------------------------------------------------------

export default function ServiceMoreMenu({ serviceId, isActived }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    dispatch(changeStatusService(serviceId, isActived));
    toast.success('Thay đổi trạng thái thành công');
  };
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem component={RouterLink} to={`/dashboard/service/${serviceId}`} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Chỉnh sửa" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem component={Button} onClick={handleChangeStatus} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon={isActived ? 'eva:eye-off-outline' : 'eva:eye-outline'} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary={isActived ? 'Vô hiệu hóa' : 'Kích hoạt'}
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
