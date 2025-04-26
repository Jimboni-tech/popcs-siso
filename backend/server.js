import express from 'express';
import sql from 'mysql2';

const app = express();
app.use(express.json());

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'popcs-siso'
});
const connectDB = () => {
    try{
        db.connect();
        console.log('mySQL database connected');
    } catch (err){
        console.log("Error: ", err);
    }
};
connectDB();

app.listen(3000, () => {
    console.log('server started on http://localhost:' + 3000);
});

app.get('/', (req, res) => {
    try {
        res.json("hello world");
    } catch (err) {
        res.json("Error: ", err);
    }
});

app.post('/signin', (req, res) => {
    const query = "INSERT INTO signin (`name`, `time`, `reason`, `class`, `teacher`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.time,
        req.body.reason,
        req.body.class,
        req.body.teacher
    ]
    db.query(query, [values], (err, data) => {
        if (err){
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});

