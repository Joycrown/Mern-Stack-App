const express = require("express")
const notes = require("./data/notes")
const dotenev = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")



const app = express();
dotenev.config()
connectDB()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is started on port ${PORT}`));


app.use("/api/users", userRoutes)

app.get('/api/notes',(req,res) =>{
    res.json(notes)
})

app.get('/api/notes/:id', (req,res) =>{
    const note=notes.find((n) =>n._id ===req.params.id)
    res.send(note)
})

app.get('/',(req,res) =>{
    res.send('API is running...')
})