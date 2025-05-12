import express from 'express';
import sql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
const db = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
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

app.listen(3001, () => {
    console.log('server started on http://localhost:' + 3001);
});

app.get('/', (req, res) => {
    try {
        res.json("hello world");
    } catch (err) {
        res.json("Error: ", err);
    }
});

app.post('/signin', (req, res) => {
    const query = "INSERT INTO signin (`name`, `datetime`, `reason`, `class`, `teacher`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.datetime,
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

app.post('/signout', (req, res) => {
    console.log('Received signout:', req.body);  // <-- add this line
    const query = "INSERT INTO signout (`name`, `datetime`, `reason`, `class`, `teacher`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.datetime,
        req.body.reason,
        req.body.class,
        req.body.teacher
    ];
    db.query(query, [values], (err, data) => {
        if (err) {
            console.error('DB error:', err);  
            return res.status(500).json(err);
        } else {
            return res.status(200).json(data);
        }
    });
});


app.get('/signout', (req, res) => {
    const query = "SELECT * FROM signout ORDER BY datetime DESC LIMIT 50";
    db.query(query, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Failed to fetch data" });
        }
        res.status(200).json(data);
    });
});
app.get('/signin', (req, res) => {
    const query = "SELECT * FROM signin ORDER BY datetime DESC LIMIT 50";
    db.query(query, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Failed to fetch data" });
        }
        res.status(200).json(data);
    });
});