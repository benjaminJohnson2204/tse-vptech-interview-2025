import { body } from "express-validator";

const makeUsernameValidator = () =>
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("Username is required")
    .isString()
    .withMessage("Username must be a string");

const makeFavoriteClassValidator = () =>
  body("favoriteClass")
    .exists({ checkFalsy: true })
    .withMessage("Favorite class is required")
    .isString()
    .withMessage("Favorite class must be a string");

export const createVote = [
  makeUsernameValidator(),
  makeFavoriteClassValidator()
];
