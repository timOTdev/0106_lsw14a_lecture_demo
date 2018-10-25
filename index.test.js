const request = require('supertest')
const server = require('./server.js');

describe('server', () => {
  describe('GET /', () => {
    it('returns status code 200(OK)', async () => {
      const response = await request(server).get('/')
      expect(response.status).toBe(200)

      // return request(server)
      //   .get('/')
      // .then(res => expect(res.status).toBe(200));
    })
    it('returns JSON', async () => {
      const response = await request(server).get('/');
      expect(response.type).toBe('application/json');
    })
    it('returns correct content', async () => {
      const response = await request(server).get('/');
      expect(response.body).toEqual({ Message: 'Good to go!' });
    })
  })

  it('can run tests', () => {
    expect(true).toBeTruthy();
  })
  it('can run more tests', () => {
    expect(false).toBeFalsy();
  })
})