const express = require('express');
const app = express()

app.use(express.json({ extended: false }))

app.get('/',(req, res) => res.send('API Running'))

// Define Routes
app.use('/api/clocking', require('./routes/api/clocking'))
app.use('/api/summary', require('./routes/api/summary'))
app.use('/api/test', require('./routes/api/test'))
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));