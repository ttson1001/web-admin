// component
import { Icon } from '@iconify/react';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Tổng quan',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Dịch vụ',
    path: '/dashboard/service',
    icon: getIcon('material-symbols:home-repair-service-rounded'),
  },
  {
    title: 'Xem đặt lịch',
    path: '/dashboard/schedule',
    icon: getIcon('healthicons:i-schedule-school-date-time'),
  },
  {
    title: 'Chăm sóc viên',
    path: '/dashboard/sitlist',
    icon: getIcon('healthicons:nurse'),
  },
  {
    title: 'Khách hàng',
    path: '/dashboard/customer',
    icon: getIcon('carbon:user-profile'),
  },
  {
    title: 'Đơn đăng ký',
    path: '/dashboard/registerlist',
    icon: getIcon('clarity:form-line'),
  },
];

export default navConfig;
