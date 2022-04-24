const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.listen(PORT, () => {
  console.log(`Server is started at port: ${PORT}!`)
});

/*app.set('views', './src');
app.set('view engine', 'pug');

app.use(express.static('./src/'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Вход' });
});

app.get('/chat/', (req, res) => {
  res.render('chat', { title: 'Чат' });
});

app.get('/reg-form/', (req, res) => {
  res.render('reg-form', { title: 'Регистрация' });
});

app.get('/error/', (req, res) => {
  res.render('error', { title: 'Ошибка' });
});

app.get('/profile/', (req, res) => {
  res.render('profile', { title: 'Мой профиль' });
});


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); */