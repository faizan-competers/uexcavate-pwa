const express = require('express')
const app = express()

// route, route-handler
app.use("/api/user", require('./routes/user'))

const port = process.env.PORT || 4200;
app.listen(4200, () => console.log("listening on port " + 4200));