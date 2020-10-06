const { express } = require("../../seeder");
const router = express.Router();

const { userRoute } = require("../../controllers/user");

router.get("/", userRoute);

module.exports = router;
