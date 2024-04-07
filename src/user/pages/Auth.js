import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/util/validator";
import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const userSubmitHandler = (event) => {
    // send to backend
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <form className="place-form" onSubmit={userSubmitHandler}>
      <Input
      id="email"
      element="input"
      type="text"
      label="Email"
      validators={[VALIDATOR_EMAIL()]}
      errorText="Please enter a valid email."
      onInput={inputHandler}
      />

<Input
      id="password"
      element="input"
      type="password"
      label="password"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please enter a valid password (min 5 characters)."
      onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Signup
      </Button>
    </form>
  );
};

export default Auth;
