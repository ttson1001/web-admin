import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';
import { approveApplied, rejectApplied } from '../../../store/actions';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ appliedForm }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleApprove = () => {
    dispatch(approveApplied(appliedForm?.email));
  };

  const handleReject = () => {
    dispatch(rejectApplied(appliedForm?.email));
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
        <MenuItem
          component={RouterLink}
          to={`/dashboard/registerlist/${appliedForm?.id}`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Iconify icon="fluent:content-view-24-regular" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Xem chi tiết" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleApprove()}>
          <ListItemIcon>
            <Iconify icon="akar-icons:circle-check" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Phê duyệt" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem sx={{ color: 'text.secondary' }} onClick={() => handleReject()}>
          <ListItemIcon>
            <Iconify icon="akar-icons:circle-x" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Từ chối" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
