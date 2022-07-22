const { default: mongoose } = require("mongoose");
const Film = require("./model");

exports.createFilm = async (filmObj) => {
  try {
    const newFilm = await Film.create(filmObj);
    console.log(newFilm);
  } catch (error) {
    console.log(error);
  }
};

exports.readFilms = async () => {
  try {
    const results = await Film.find();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

exports.searchFilms = async (title, actor, rating) => {
  try {
    const results = await Film.find({ $or: [title, actor, rating] });
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

exports.updateFilm = async (filter, update) => {
  try {
    if (update.actor && update.rating) {
      //update both actor and rating
      await Film.updateOne(filter, { actor: update.actor, rating: update.rating });
    } else if (update.actor) {
      //update just actor
      await Film.updateOne(filter, { actor: update.actor });
    } else if (update.rating) {
      //update just rating
      await Film.updateOne(filter, { rating: update.rating });
    } else {
      console.log("Nothing to update");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFilm = async (title, actor, rating) => {
  try {
    const results = await Film.deleteOne({ $or: [title, actor, rating] });
    console.log("Deletion successful");
  } catch (error) {
    console.log(error);
  }
};
