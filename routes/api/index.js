const router = require("express").Router();

// Require routes from within api directory
const mealRoutes = require("./companies"); 

// Routes -- Appends api path to .../xxx/...
router.use("/comp", mealRoutes); 

module.exports = router;
