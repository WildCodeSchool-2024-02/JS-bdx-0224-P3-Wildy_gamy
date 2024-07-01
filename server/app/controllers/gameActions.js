// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const games = await tables.game.readAll();
    // Respond with the items in JSON format
    res.json(games);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const game = await tables.game.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (game == null) {
      res.sendStatus(404);
    } else {
      res.json(game);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// Extract the item data from the request body

// Insert the item into the database

// Respond with HTTP 201 (Created) and the ID of the newly inserted item

// Pass any errors to the error-handling middleware

// The A of BREAD - Add (Create) operation

// Extract the item data from the request body

// Insert the item into the database

// Respond with HTTP 201 (Created) and the ID of the newly inserted item

// Pass any errors to the error-handling middleware

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Delete the program from the database

// Respond with HTTP 204 (No Content)

// Pass any errors to the error-handling middleware

// Ready to export the controller functions
module.exports = {
  browse,
  read,
};
