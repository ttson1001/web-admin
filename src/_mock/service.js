import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.random.numeric(2),
  avatarUrl: `/static/mock-images/products/product_${index}.jpg`,
  name: faker.vehicle.vehicle(),
  company: faker.commerce.price(),
  status: sample(['active', 'deny']),
  role: faker.datatype.datetime({ min: 1663256841000, max: 1694792841000 }).toLocaleDateString(),
}));

export default users;
