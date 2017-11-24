var express = require('express'); //libraries-jcreating web server
var morgan = require('morgan');//output log ..what requests are coming to the server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var cool={
    text:"hey! there"
    
};
function call(arg){
    var text=arg.text;
    var newText=`
    <h2>
        ${text}
    </h2>
    `;
    return newText;
}
app.get('/article-one',function(req,res){
    res.send(call(cool));
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
