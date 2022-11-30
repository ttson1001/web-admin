import axiosClient from './axiosClient';

const sitterApi = {
  getAll: (params) => {
    const url = '/sitter';
    return axiosClient.get(url, { params });
  },
  getAllService: (url = '/service/services') => {
    return axiosClient.get(url);
  },
  getAllSitter: (url = '/sitter/sitters') => {
    return axiosClient.get(url);
  },
  getAllApplied: (url = '/candidate/candidates') => {
    return axiosClient.get(url);
  },
  approveApplied: (email, url = '/candidate/accept') => {
    return axiosClient.put(`${url}/${email}`);
  },
  getAllBooking: (url = '/booking/bookings') => {
    return axiosClient.get(url);
  },
  rejectApplied: (email, url = '/candidate/reject') => {
    return axiosClient.put(`${url}/${email}`);
  },
  getAllCustomer: (url = '/customer/customers') => {
    return axiosClient.get(url);
  },
  getCustomerById: (id, url = '/customer/get-by-id') => {
    return axiosClient.get(`${url}/${id}`);
  },
  getSitterDetail: (id, url = '/sitter/get-by-id') => {
    return axiosClient.get(`${url}/${id}`);
  },
  getServiceById: (id, url = '/service/get-by-id') => {
    return axiosClient.get(`${url}${id}`);
  },
  getCandidateById: (id, url = '/candidate/get-by-id') => {
    return axiosClient.get(`${url}/${id}`);
  },
  getBookingRevenue: (startDate, endDate, url = '/booking/revenue') => {
    return axiosClient.post(url, { startDate, endDate });
  },
  getNumOfBooking: (startDate, endDate, url = '/booking/count-booking') => {
    return axiosClient.post(url, { startDate, endDate });
  },
  getBookingById: (id, url = '/booking/get-by-id-for-admin') => {
    return axiosClient.get(`${url}/${id}`);
  },
  updateService: (serviceInfo, url = '/service/update') => {
    return axiosClient.put(url, serviceInfo);
  },
  addService: (serviceInfo, url = '/service/add') => {
    return axiosClient.post(url, serviceInfo);
  },
  getCategories: (url = '/category/categories') => {
    return axiosClient.get(url);
  },
  getUpSalaryForm: (id, url = '/sitter/up-salary-form') => {
    return axiosClient.get(`${url}/${id}`);
  },
  approveUpSalaryForm: (id, url = '/sitter/approve-up-salary') => {
    return axiosClient.put(`${url}/${id}`);
  },
  rejectUpSalaryForm: (id, url = '/sitter/reject-up-salary') => {
    return axiosClient.put(`${url}/${id}`);
  },
  activeService: (id, url = '/service/activate') => {
    return axiosClient.put(`${url}/${id}`);
  },
  deactiveService: (id, url = '/service/deactivate') => {
    return axiosClient.put(`${url}/${id}`);
  },
};
export default sitterApi;
