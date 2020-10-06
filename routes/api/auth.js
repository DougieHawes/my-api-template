const { express } = require("../../seeder");
const router = express.Router();

const { authRoute } = require("../../controllers/auth");

router.get("/", authRoute);

module.exports = router;
