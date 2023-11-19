import * as yup from "yup";

export const contactSchema = yup
  .object()
  .shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Invalid email form"),
    number: yup.string(),
    message: yup.string().required("Please enter your message")
  })
  .test(
    "email or number",
    "Please enter either email or number",
    function (value) {
      if (!value.email && !value.number) {
        return this.createError({
          path: "eitherEmailorNumber", // You can specify either 'email' or 'number' here
          message: "Please enter either email or phone number"
        });
      }
      return true;
    }
  );
