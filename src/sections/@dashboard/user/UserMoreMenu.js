import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';
import SitterApplication from '../../../layouts/popup/SitterApplication';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ sitterId }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <MenuItem component={RouterLink} to={`/dashboard/sitlist/${sitterId}`} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="fluent:content-view-24-regular" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Xem chi tiết" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <SitterApplication sitterId={sitterId} />
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Xóa" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
