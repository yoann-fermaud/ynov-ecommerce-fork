// Ensure dotenv is loaded before modules under test read process.env
require('dotenv').config();

// No fetch polyfill needed as tests use supertest, but this file exists
// to centralize setup if needed in future (e.g. global mocks).

