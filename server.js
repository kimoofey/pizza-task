const createError = require('http-errors');
const path = require('path');
const express = require('express');
const indexRouter = require('./backend/routes');
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'backend/build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'backend/build', 'index.html'));
    });
}

const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    next(createError(404));
});

app.use('/', indexRouter);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));