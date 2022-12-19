import React from "react";
import Label from "@/components/molecules/form/label/Label";
import Alien from "@/assets/img/alien.svg";

const Text = () => {
  return (
    <div>
      <Label options={{ id: 2993 }} id="9384">
        Holi
      </Label>
      <h1 data-testid="test">Hola Mundo</h1>
      <Alien width="50" height="50" />
    </div>
  );
};
export default Text;
