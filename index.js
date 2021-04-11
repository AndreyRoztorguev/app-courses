const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");
const cardRoutes = require("./routes/card");

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

// app.get("/about", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "views", "about.html"));
// });

app.use(homeRoutes);
app.use(addRoutes);
app.use("/courses", coursesRoutes);
app.use("/card", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
