global.__basedir = __dirname

const app = require('./src/app')
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
  console.log('El servidor está corriendo en el puerto 8080.')
})