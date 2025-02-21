import express from "express";

import * as VoteController from "src/controllers/vote";
import * as VoteValidator from "src/validators/vote";

const router = express.Router();

/*
Fix #2: The listVotes controller was not registered in the routes, so a 404 was returned
when making a GET /api/votes request. This can be found by tracing through the 404 and noticing
that the route is not registered (in practice, most candidates figured this one out pretty early
on, without tracing through anything).
*/
router.get("/", VoteController.listVotes);
router.post("/", VoteValidator.createVote, VoteController.createVote);

export default router;
