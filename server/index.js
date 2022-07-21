const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 5000);


app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
    console.log(path.resolve(__dirname, '../build', 'index.html'))
});