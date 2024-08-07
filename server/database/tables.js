// Import the repository modules responsible for handling data operations on the tables

const RewardRepository = require("./models/RewardRepository");
const GameRepository = require("./models/GameRepository");
const UserRepository = require("./models/UserRepository");
const PartyRepository = require ("./models/PartyRepository");
const FavoriteRepository = require("./models/FavoriteRepository");
const CoinRepository = require ("./models/CoinRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table

tables.reward = new RewardRepository();
tables.game = new GameRepository();
tables.user = new UserRepository();
tables.party = new PartyRepository();
tables.favorite = new FavoriteRepository();
tables.coin = new CoinRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
