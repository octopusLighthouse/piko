let express = require('express');
let core = require('./core/core');
let app = express();
app.use(core.run);
app.listen(5000);