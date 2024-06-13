// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const router = express.Router();

// // Define the route to get images
// router.get("/images", (req, res) => {
//   const imagesDir = path.join(
//     __dirname,
//     "../../../server/public/arcade-picture"
//   );

//   fs.readdir(imagesDir, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to read images directory" });
//     }
//     const imageUrls = files.map((file) => `/arcade-picture/${file}`);
//     res.json(imageUrls);
//   });
// });

// module.exports = router;
