const request = require('supertest');
const app = require('./index');
const ordersData = require('./data/orders');

test('POST /api/orders creates a new order and returns 201 with the order body', async () => {
  const initialLength = ordersData.length;

  const res = await request(app)
    .post('/api/orders')
    .send({ userId: 9, productIds: [1, 3] })
    .set('Accept', 'application/json');

  expect(res.status).toBe(201);
  const body = res.body;

  // Basic assertions about returned order
  expect(body.userId).toBe(9);
  expect(body.productIds).toEqual([1, 3]);
  expect(body.total).toBe(0);
  expect(body.status).toBe('pending');
  expect(typeof body.id).toBe('number');

  // Ensure orders array was mutated as expected
  expect(ordersData.length).toBe(initialLength + 1);

  // cleanup: remove the order we added so other tests remain deterministic
  ordersData.pop();
});
