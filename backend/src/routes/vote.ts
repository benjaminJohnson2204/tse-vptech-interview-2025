import express from "express";

import * as VoteController from "src/controllers/vote";
import * as VoteValidator from "src/validators/vote";

const router = express.Router();

router.post("/", VoteValidator.createVote, VoteController.createVote);

export default router;
