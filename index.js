const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/Categories.json');
const courses = require('./data/Courses.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send('ULearning API is Running now..');
});

app.get('/category', (req, res) => {
    res.send(categories);
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.filter(course => course.id === id);
    res.send(courseDetails);
});
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id === id);
    res.send(courseDetails);
});

app.listen(port, () => {
    console.log('ULearning server is running on port 5000', port);
})