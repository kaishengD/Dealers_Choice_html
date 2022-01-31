const express = require('express');
const morgan = require('morgan');
const cats = require('./cats');
const app = express();
app.use(express.static('public'))  //be able to use any file in public
app.use(morgan('dev'));

app.get("/", (req, res) => {
    let catsList = cats.listCat();
    const html =
    `<html>
    <head>
      <title>Cats</title>
      <link rel="stylesheet" href="/dealer_choice.css" />
    </head>
    <body>
        <header><img id = "logo" src="/logo.png"/>Cat Friends</header>
        <div class = "container">
            ${catsList.map((cat)=>
                `<p class = "cat">
                    <a href = /cats/${cat.name}>
                        <h5> ${cat.name}</h5>
                    </a>
                </p>`
            ).join("")}
        </div>
    </body>
    </html>`;
    res.send(html)
});

app.get('/cats/:name', (req, res) => {
    console.log(req.params);
    const name = req.params.name;
    console.log(name);
    const cat = cats.findCatByName(name);
    console.log(cat);
    const html = `
    <html>
    <head>
      <title>Cat</title>
      <link rel="stylesheet" href="/dealer_choice.css" />
    </head>
    <body>
      <div class='news-item'>
        <header><a href='/'><img id = "logo" src="/logo.png"/></a>Cat Friends</header>
        <p>
          <div id = ${cat.name} class = "description">
            My name is ${cat.name}, I am a ${cat.breed}, I like to eat ${cat.favouriteFood}.
          </div>
          <img class = "photos" src="/${cat.name}.jpg"/>
        </p>
      </div>
  
    </body>
    </html>`
    res.send(html);
  });


const PORT = 2002;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});