import v from "validator";
import { IUserDocument } from "../models/User";

/**
 * Partial<T> Constructs a type with all properties of T set to optional
 *
 * @interface RegisterInputError
 * @extends {Partial<IUserDocument>}
 */
interface RegisterInputError extends Partial<IUserDocument> {
  confirmPassword?: string;
}

export const validateRegisterInput = (
  username: IUserDocument["username"] /* equal to string */,
  password: IUserDocument["password"],
  email: IUserDocument["email"],
  confirmPassword: IUserDocument["password"]
) => {
  let errors: RegisterInputError = {};

  if (v.isEmpty(username)) {
    errors.username = "Username must not be empty.";
  }

  if (v.isEmpty(password)) {
    errors.password = "Password must not be empty";
  }

  if (v.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Confirm password must not be empty.";
  }

  if (v.equals(password, confirmPassword)) {
    errors.confirmPassword = "Password must match.";
  }

  if (v.isEmpty(email)) {
    errors.email = "Email must not empty.";
  }

  if (v.isEmail(email)) {
    errors.email = "Email must be a valid email address.";
  }

  return { errors, valid: Object.keys(errors).length < 1 };
};
