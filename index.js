const express = require("express");
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://organicUser:hdZcg4EYZGUfJQ8w@cluster0.dkmkvf0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/driver-list", async (req, res) => {
  const database = await client.db("DriverMonitoringSystem");
  const driverList = await database.collection("driverList");
  const allDriverCursor = await driverList.find({});
  const allDriver = await allDriverCursor.toArray();

  res.send(allDriver);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
