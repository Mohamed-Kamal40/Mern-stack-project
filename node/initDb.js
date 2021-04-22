const { MongoClient } = require("mongodb");

module.exports = async () => {
  const client = new MongoClient("mongodb://localhost/27017/reactProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  return client.db("reactProject").collection("users");
};
