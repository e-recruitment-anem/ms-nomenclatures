import { object, string } from "zod";

const SignUpRequest = object({
  body: object({
    firstname: string({ required_error: "firstname is required." }),
    lastname: string({ required_error: "lastname is required." }),
    email: string({ required_error: "email is required." }),
    password: string({ required_error: "password is required." }),
    phoneNumber: string({ required_error: "phoneNumber is required." }),
  }),
});

const SignInRequest = object({
  body: object({
    email: string({ required_error: "email is required." }),
    password: string({ required_error: "password is required." }),
  }),
});

const ForgetPasswordRequest = object({
  params: object({
    email: string({ required_error: "email is required." }),
  }),
});
const ConfirmAccountRequest = object({
  params: object({
    token: string({ required_error: "token is required." }),
  }),
});

const ResetPasswordRequest = object({
  params: object({
    token: string({ required_error: "token is required." }),
  }),
  body: object({
    password: string({ required_error: "password is required." }),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required.",
    }),
  }),
});

const UpdatePasswordRequest = object({
  body: object({
    password: string({ required_error: "password is required." }),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required.",
    }),
  }),
});

export default {
  SignUpRequest,
  SignInRequest,
  ForgetPasswordRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest,
  ConfirmAccountRequest,
};
