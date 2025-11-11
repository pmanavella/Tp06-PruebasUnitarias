const request = require('supertest');
const app = require('../src/app');

describe('Plants API', () => {
  it('GET /api/plants devuelve lista de plantas', async () => {
    const res = await request(app).get('/api/plants');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('POST /api/plants crea una planta válida', async () => {
    const res = await request(app)
      .post('/api/plants')
      .send({ name: 'Suculenta' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Suculenta');
  });

  it('POST /api/plants con nombre inválido devuelve 400', async () => {
    const res = await request(app)
      .post('/api/plants')
      .send({ name: '' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message');
  });
});
