import React, { useState } from "react";
import "./DesignSystem.scss";

import Navbar from "@/components/organisms/navbar/Navbar";
import ButtonInput from "@/components/molecules/form/button/Button";
import TextField from "@/components/molecules/form/textField/TextField";
import EmailField from "@/components/molecules/form/emailField/EmailField";
import PasswordField from "@/components/molecules/form/passwordField/PasswordField";
import Text from "@/components/molecules/text/Text";

const Home = () => {
  const [inputOptions, setInputOptions] = useState({
    error: false,
    required: true,
    label: "Text Input",
    value: "",
    placeholder: "Open text input",
    helper: "",
    defaultHelper: "Enter an alphanumeric value",
    emit: (value, statusError) => emitInput(value, statusError),
  });

  const [emailOptions, setEmailOptions] = useState({
    required: true,
    error: false,
    label: "Email Input",
    placeholder: "your.email@domain.com",
    defaultHelper: "Only accept emails",
  });

  const emitInput = (value, statusError) => {
    setInputOptions({
      ...inputOptions,
      value,
      error: statusError.error,
      helper: statusError.error
        ? statusError.message
        : inputOptions.defaultHelper,
    });
  };

  const emitEmail = (value, statusError) => {
    console.log(value);
    setEmailOptions({
      ...emailOptions,
      value,
      error: statusError.error,
      helper: statusError.error
        ? statusError.message
        : emailOptions.defaultHelper,
    });
  };

  const emitButton = (event) => {
    console.log("Button clicked");
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <div>
          <h1 className="spacing">Desing System</h1>
          <h1 className="spacing">Tipografía</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>

          <h1 className="spacing">Example body text</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Voluptatibus qui architecto saepe ipsam eius libero sed doloribus
            hic repellat asperiores numquam quod magni expedita, laudantium
            dicta ipsum omnis temporibus aliquid?
          </p>

          <h2 className="spacing">Example body text</h2>
          <p className="text-success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-danger">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-disabled">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <h2>Buttons</h2>
          <div>
            <ButtonInput
              className="danger"
              options={{
                mode: "primary",
                defaultValue: "Primary",
              }}
              onClick={(e) => emitButton(e)}
            />
            <ButtonInput
              options={{
                mode: "secundary",
                defaultValue: "Secundary",
              }}
              onClick={(e) => emitButton(e)}
            />
          </div>

          <h2 className="spacing">Forms</h2>
          <TextField options={inputOptions} />
          <EmailField
            options={emailOptions}
            handleValue={(value, statusError) => emitEmail(value, statusError)}
          />
          <PasswordField
            options={{
              label: "Password Input",
              defaultHelper: "Enter your password",
            }}
          />
          <Text />
        </div>
      </section>
    </>
  );
};

export default Home;
