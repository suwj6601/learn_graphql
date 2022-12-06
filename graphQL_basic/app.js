const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://tranvansu:Tranvansu661002@cluster0.em3dovv.mongodb.net/?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );
mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server is running"));
