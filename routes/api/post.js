const { express } = require("../../seeder");
const router = express.Router();

const { postRoute } = require("../../controllers/post");

router.get("/", postRoute);

module.exports = router;
