// Simple email/password authentication.
// Sets up a /login route. Issue a POST call with name/password to authenticate.
// Returns a JWT token if successful.
// Sets up a /secret route which will authenticate the request with a JWT token
// expected in the body.

var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

// Keep this ssecret! (Do not save in github for production)
const secretKey = 'flyexuma5';

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = secretKey;

// Global variable set with callback into user database.
// TODO(tvykruta): Find better way to implemnt this.
var findUserFunc;

// Queries user database for JWT id.
function authenticateJwt(jwt_payload, next) {
  console.log('JWT payload received', jwt_payload);
  findUserFunc(jwt_payload.id).then((user) => {
    next(null, user);
  }).catch((err) => {
    console.log("User lookup error: " + err);
    next(null, false);
  });
};

function createJwtToken(id) {
  var payload = { id: id };
  var token = jwt.sign(payload, jwtOptions.secretOrKey);
  return token;
}

// Authenticates user with password and generates JWT token.
function AuthenticateUserAndReturnToken(req, res) {
  if (!req.body.name || !req.body.password) {
    res.status(401).json({ message: "Missing user or password." });
  }
  var name = req.body.name;
  var password = req.body.password;
  
  findUserFunc(name).then((user) => {
    if (user == null) {
      res.status(401).json({ message: "no such user found: " + name });
    }
    if (user.password === req.body.password) {
      const token = createJwtToken(user.username);
      res.json({ message: "ok", token: token });
    } else {
      res.status(401).json({ message: "passwords did not match" });
    }
  }).catch((err) => {
    console.log("User lookup error: " + err);
    res.status(401).json({ message: "Error! " + name + ", " + err });
  });
};

// Sets up authentication.
function setup(app, findUserCallback) {
  findUserFunc = findUserCallback;
  var strategy = new JwtStrategy(jwtOptions, authenticateJwt);

  passport.use(strategy);
  app.use(passport.initialize());
  // parse application/x-www-form-urlencoded asier testing with Postman or HTML
  app.use(bodyParser.urlencoded({extended: true}));
  // parse application/json
  app.use(bodyParser.json())
  app.post("/login", AuthenticateUserAndReturnToken);
  app.get("/secret", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json({ message: "Success! You can not see this without a token" });
  });
}

module.exports = {setup, createJwtToken};