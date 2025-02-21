import { RequestHandler } from "express";
import { validationResult } from "express-validator";

import VoteModel from "src/models/vote";
import validationErrorParser from "src/util/validationErrorParser";

export const listVotes: RequestHandler = async (req, res, next) => {
  try {
    /*
    Fix #3: The call to VoteModel.find() was not awaited, so the "votes" returned as JSON
    was a promise instead of a list of Vote models. This leads to a weird error message about
    how a circular structure (in this case, the query promise) cannot be converted to JSON.
    This can be found by looking at the code and comparing it to other projects or just knowing that 
    Mongoose queries must be awaited, or by console.log(votes) and noticing it's a promise instead
    of a list of votes (all the candidates used the first strategy).
    */
    const votes = await VoteModel.find();
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
};

export const createVote: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  try {
    validationErrorParser(errors);

    const { username, favoriteClass } = req.body;
    const vote = await VoteModel.create({
      username,
      favoriteClass
    });

    res.status(201).json(vote);
  } catch (error) {
    next(error);
  }
};
