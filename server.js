console.log('Hello Express');

let express = require('express');// without ./ automatically goes to node modules

let app = express();

app.use(express.static('server/public'));


app.listen(5000, function () {
    console.log('Running on port 5000');

});
