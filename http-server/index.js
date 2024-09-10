const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
const { register } = require("module");
const args = minimist(process.argv.slice(1));

console.log(args.port);

const port = args.port;

let homeContent = "";
let projectContent = "";
let registraionContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registraionContent = registration;
});

if (port == 5000) {
  http
    .createServer((request, response) => {
      let url = request.url;
      response.writeHeader(200, { "Content-Type": "text/html" });
      switch (url) {
        case "/project":
          response.write(projectContent);
          response.end();
          break;

        case "/registration":
          response.write(registraionContent);
          response.end();
          break;

        default:
          response.write(homeContent);
          response.end();
          break;
      }
    })
    .listen(5000);
} else {
  http
    .createServer((request, response) => {
      let url = request.url;
      response.writeHeader(200, { "Content-Type": "text/html" });
      switch (url) {
        case "/project":
          response.write(projectContent);
          response.end();
          break;
        case "/registration":
          response.write(registraionContent);
          response.end();
          break;

        default:
          response.write(homeContent);
          response.end();
          break;
      }
    })
    .listen(3000);
}
