const request = require('supertest')
const server = require('./server.js');

describe('server', () => {
  it('can run tests', () => {
    expect(true).toBeTruthy();
  })
  it('can run more tests', () => {
    expect(false).toBeFalsy();
  })

  describe('GET /', () => {
    it('returns status code 200(OK)', async () => {
      let response = await request(server).get('/')
      expect(response.status).toBe(200);

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
      expect(response.body).toEqual({ message: 'Good to go!' });
    })
  })

  describe('POST /hello/:name', () => {
    it('returns status code 201(Created)', async () => {
      const response = await request(server).post(`/hello/john`);
      expect(response.status).toBe(201);
    })
    it('returns JSON', async () => {
      const response = await request(server).post(`/hello/john`);
      expect(response.type).toBe('application/json');
    })
    it('should greet the person', async () => {
      const name = 'Patrick';
      const lastName = 'Thompson';
      const response = await request(server).post(`/hello/${name}`).send({ lastName })
      expect(response.body).toEqual({ hello: 'Patrick Thompson' });
    })
    it('adds person to the Doe family if no last name provided', async () => {
      const name = 'Adam';
      const response = await request(server).post(`/hello/${name}`)
      expect(response.body).toEqual({ hello: 'Adam Doe' });
    })
  })
})