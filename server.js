var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var art_1_obj={
    title:'art-one',
    heading:'ART-ONE',
    date:'sept-26',
    content:'  This is the content for my first article'
};
function createTemplate(data){
    
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html>
    <head>
        <title>
            Article One | Ashish Duklan
        </title>
    </head>
    <link href="/ui/style.css" rel="stylesheet" />
  
    <body>
        <div>
            <a href="/">
                this is date ${date}
            </a>
            <a href='/ui/madi.png'>
                link to image
            </a>
                
        </div>
        <hr/>
        
        <div class='cont'>
            <h3>
                Article One
            </h3>
            <div>
                Aug 18,2017
                </div>
                <div>
                    <p>
                      ${content}  
                    </p>
                </div>
        </div>
    </body>
    
    
</html>`
    ;
    
    return htmlTemplate;
}
    
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
     res.send(createTemplate(art_1_obj))
     
    // res.sendFile(path.join(__dirname,'ui','article-one.html'));
     
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
