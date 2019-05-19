const router = require("express").Router();

// Require routes from within api directory
const compRoutes = require("./companies"); 

// Routes -- Appends api path to .../xxx/...
router.use("/comp", compRoutes); 

module.exports = router;
