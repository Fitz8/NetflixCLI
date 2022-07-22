require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createFilm, readFilms, deleteFilm, updateFilm, searchFilms } = require("./film/functions");

const app = async (yargsObj) => {
  if (yargsObj.create) {
    await createFilm({ title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating });
    //create a new film
  } else if (yargsObj.read) {
    await readFilms();
    //read and display entire film database
  } else if (yargsObj.search) {
    await searchFilms({ title: yargsObj.title}, {actor: yargsObj.actor}, {rating: yargsObj.rating});
    //search by title, actor or rating
  } else if (yargsObj.update) {
    const filterObj = { title: yargsObj.title };
    const updateObj = { actor: yargsObj.newActor, rating: yargsObj.newRating };
    await updateFilm(filterObj, updateObj);
    //update film entry
  } else if (yargsObj.delete) {
    await deleteFilm({ title: yargsObj.title}, {actor: yargsObj.actor}, {rating: yargsObj.rating});
    //delete film
  } else {
    console.log("Incorrect Command");
  }
  await mongoose.disconnect();
};

app(yargs.argv);
