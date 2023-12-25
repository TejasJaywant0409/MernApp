const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/ProjectRestaurant";

const MongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("foodItems");
    const data = await fetchedData.find({}).toArray();

    //console.log(data);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = MongoDB;
