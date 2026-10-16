const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

function createProxy(target) {
  return createProxyMiddleware({
    target,
    cookieDomainRewrite: 'dev-prueba.com',
    changeOrigin: true,
    pathRewrite: (_path, req) => req.originalUrl,
    logger: console,
    on: {
      proxyReq(proxyReq, req) {
        proxyReq.setHeader(
          'Accept-Language',
          req.headers['accept-language'] || 'es-ES,es;q=0.9,en;q=0.8'
        );
      }
    }
  });
}

app.use('/api', createProxy('http://127.0.0.1:8080'));
app.use('/admin/login', createProxy('http://localhost:5170'));
app.use('/admin', createProxy('http://localhost:5171'));
app.use('/login', createProxy('http://localhost:5176'));
app.use('/cuenta', createProxy('http://localhost:5178'));
app.use('/', createProxy('http://localhost:5177'));

if (require.main === module) {
  app.listen(80, '127.0.0.1');
}

module.exports = app;
