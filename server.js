const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const pug = require("pug");

app.set('views', './templates');
app.set("view engine", "pug");

// app.use(express.static("public"));

// this serves static files
app.use(express.static("public"));
// app.use(express.static("html/blog/images"));

// this sets up the dynamic routes
// app.get("/api/data", (req,res) => {
//   res.json({
//     message: "This message is from the server!"
//   })
// })
// app.get("/bamboo.ico");


app.get("/", (req,res) => {
  res.render('index', {title: "The Bamboo Coder", page: 'root'});
});

app.get("/about", (req,res) => {
  res.render('index', {title: "The Bamboo Coder", page: 'about'});
});


// app.get("/blog", (req,res) => {
//   res.render('index', {title: "The Bamboo Coder", page: 'blog'});
// });

app.get("/projects", (req,res) => {
  // console.log("hi");
  res.render('index', {title: "The Bamboo Coder", page: 'projects'});
});

app.get("/terms-and-conditions", (req,res) => {
  const file_content = fs.readFile(`html${req.url}.html`, "utf-8", (err, data) => {
    if(err) {
      console.log(err);
      return;
    }

    // console.log(data, "server.js data");
    // res.render('index', {title: "The Bamboo Coder", page: 'blog_page', content: `${data}`});
    res.render('index', {title: "The Bamboo Coder - Terms and Conditions", page: 'blog_page', content: `${data}`});
  });
});

app.get("/privacy-policy", (req,res) => {
  const file_content = fs.readFile(`html${req.url}.html`, "utf-8", (err, data) => {
    if(err) {
      console.log(err);
      return;
    }

    // console.log(data, "server.js data");
    // res.render('index', {title: "The Bamboo Coder", page: 'blog_page', content: `${data}`});
    res.render('index', {title: "The Bamboo Coder - Privacy Policy", page: 'blog_page', content: `${data}`});
  });
});

app.get("/blog", (req,res)=> {
  const files = fs.readdir("html/blog", (err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    // let names = [];
    // names.push(data.basename)
    let file = data.filter(el => {
      if (path.extname(el) === ".html" && el !== "index.html") {;
        return el;
      }
    });
    //  is there a better way to do this --- faster???
    let fileUrl = file.map(obj => {
      // let newObj = obj.replace(/_/g, " ");
      return obj.slice(0, -5);
    });
    let fileTitles = file.map(obj => {
      let newObj = obj.replace(/_/g, " ");
      return newObj.slice(0, -5);
    });
    // console.log(fileUrl, "file list in blog directory");
    // console.log(fileTitles, "file titles list in blog directory");
    res.render('index', {title: "The Bamboo Coder - Blog", page: "blog", list: fileUrl, blogTitles: fileTitles});
    
  });
  // console.log(files);

});

app.get("/blog/*", (req,res) => {
  // const blog_path = path.basename("blog_pages/test.html");
  // console.log(blog_path, "---> blog path in server.js");
  // console.log(req.url, "---> url in server.js");

  // need to prevent matomo code from coming here
  
  

  const file_content = fs.readFile(`html${req.url}.html`, "utf-8", (err, data) => {
    if(err) {
      console.log(err);
      return;
    }

    // console.log(data, "server.js data");
    res.render('index', {title: "The Bamboo Coder", page: 'blog_page', content: `${data}`});
  });
  // console.log(file_content);

  // res.send("hi");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})

