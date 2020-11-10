import { CardContent } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import { RoundedButton } from "../../ui/roundedButton/RoundedButton";

const SignInGuestSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter a valid email."),
});

const RegisterGuestForm = () => {
  function handleFormSubmit(event) {
    console.log("event", event);
    event.setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={SignInGuestSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleFormSubmit({ values, setSubmitting });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <div className="flex">
          <Form className="w-1/2">
            <Field
              className="w-full"
              variant="outlined"
              component={TextField}
              name="email"
              type="email"
              label="Email"
              helperText="We'll send your reservation with clear instructions"
            />
            <div className="my-2">
              <RoundedButton
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Continue as Guest
              </RoundedButton>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterGuestForm;
