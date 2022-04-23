const express = require('express');

const app = express();
const PORT = 3000;

app.set('views', './sources');
app.set('view engine', 'pug');

app.use(express.static('./sources/'));

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
  res.render('profile', { title: 'Мой рофиль' });
});


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 