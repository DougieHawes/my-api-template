const { app, cors, dotenv, mongoose, expressJson } = require("./seeder");

dotenv.config();

// DATABASE
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

// APP
app.use(cors());
app.use(expressJson);

const authRoute = require("./routes/api/auth");
const postRoute = require("./routes/api/post");
const userRoute = require("./routes/api/user");

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

const port = process.env.PORT;

app.listen(port, console.log(`express app running on port:${port}`));
