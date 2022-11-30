import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  num: faker.random.numeric(2),
  id: faker.random.numeric(6),
  // avatarUrl: `/static/mock-images/products/product_${index}.jpg`,
  sitName: faker.vehicle.vehicle(),
  cusName: faker.name.findName(),
  serName: faker.commerce.price(),
  status: sample(['done', 'working']),
  // role: faker.datatype.datetime({ min: 1663256841000, max: 1694792841000 }).toLocaleDateString(),
}));

export default users;
