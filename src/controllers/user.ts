import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/HTTPException";
import { UNPROCESSABLE_ENTITY } from "http-status-codes";
import { validateRegisterInput } from "../utils/validator";
import User, { IUserDocument } from "../models/User";

export const postRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, confirmPassword, email } = req.body;
    const { errors, valid } = validateRegisterInput(
      username,
      password,
      confirmPassword,
      email
    );

    if (!valid) {
      throw new HttpException(
        UNPROCESSABLE_ENTITY,
        "User register input error",
        errors
      );
    }

    const user = await User.findOne({ username }); /* 查找唯一值 */

    if (user) {
      throw new HttpException(UNPROCESSABLE_ENTITY, "Username is taken", {
        username: "The username is taken."
      });
    }

    const newUser: IUserDocument = new User({
      username,
      email,
      password
    });

    const resUser: IUserDocument = await newUser.save();

    res.json({
      succcess: true,
      data: {
        user: resUser._doc
      }
    });
  } catch (error) {
    next(error);
  }
};
