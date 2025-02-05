import { RequestHandler } from "express";
import { validationResult } from "express-validator";

import VoteModel from "src/models/vote";
import validationErrorParser from "src/util/validationErrorParser";

export const listVotes: RequestHandler = async (req, res, next) => {
  try {
    const votes = VoteModel.find();
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
