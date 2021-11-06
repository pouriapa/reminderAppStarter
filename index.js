const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const { addAbortSignal } = require("stream");
const reminderRouter = require('./routers/reminder');
const authenticateRouter = require('./routers/authenticate');


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(reminderRouter);

app.use(authenticateRouter);






app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
