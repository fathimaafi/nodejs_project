const request = require('supertest');
const { app, server } = require('../server');

afterAll(() => server.close());

describe('Login Route Tests', () => {
  test('GET /login - should return 200 and HTML page', async () => {
    const res = await request(app).get('/login');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });

  test('POST /login - success with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'admin123' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  test('POST /login - fail with wrong password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'wrongpass' });
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid username or password');
  });

  test('POST /login - fail with unknown user', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'unknown', password: 'pass' });
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid username or password');
  });

  test('POST /login - fail with empty fields (validation)', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: '', password: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toBeDefined();
  });

  test('GET / - redirect to /login when not authenticated', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe('/login');
  });
});
