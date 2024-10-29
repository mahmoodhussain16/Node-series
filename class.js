// import http from "http";
function urlParser(url = "") {
  const parsedUrl = url.split("?");
  return {
    path: parsedUrl[0], // /users/profile,
    params:
    query: parsedUrl[1], //queryParser(parsedUrl[1]), // employee-form=123&user=3
  };
}
function queryParser(query = "") {
  //employee-form=123&user=3
  const parsedQuery = query.split("&"); // [employee-form=123, user=3]
  const queryObj = {};
  for (let index = 0; index < parsedQuery.length; index++) {
    const individualQuery = parsedQuery[index].split("="); // [employee-form, 123]
    queryObj[individualQuery[0]] = individualQuery[1]; // {employee-form: 123}
  }
  return queryObj;
}
function urlCreator(path, query) {
  return "";
}
const _get = (req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home page: " + req.url);
      break;
    case "/contact":
      res.end("Contact page: " + req.url);
      break;
    case "/about":
      res.end("About page: " + req.url);
      break;
    case "/about?memberships":
      res.end("Membership page: " + req.url);
      break;
    default:
      res.end("404 Not found: " + req.url);
  }
};
const _post = (req, res) => {
  switch (req.url) {
    case "/contact":
      res.end("Contact form submitted");
      break;
    default:
      res.end("404 Not found: " + req.url);
  }
};
const routes = [
  {
    name: "home",
    path: "/",
    query: "",
    handler: (req, res) => {
      res.end("Home Page");
    },
  },
  {
    name: "about",
    path: "/about",
    query: "",
    handler: (req, res) => {
      res.end("About Page");
    },
  },
  {
    name: "contact",
    path: "/contact",
    method:[]
    query: "employee-form",
    data: "Contact Page",
    handler(req, res, url) {
      if (req.method === "GET") res.end("Contact Page");
      if (req.method === "POST" && this.query === url.query)
        res.end("CONTACT FORM");
    },
  },
];
const requestHandler = (req, res) => {
  const parsedUrl = urlParser(req.url);
  const currentRoute = routes.find((route) => route.path === parsedUrl.path);
  if (currentRoute) return currentRoute.handler(req, res, parsedUrl);
  return res.end("404 Not found: " + req.url);
};

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () =>
  console.log("Server Started at", `http://localhost:${PORT}`)
);
