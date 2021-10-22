import React from "react";
import Label from "@/components/molecules/form/Label/index";
import alien from '../../../assets/img/alien.svg'

const Text = () => {
  return (
    <div>
      <Label options={{ id: 2993 }} id="9384">Holi</Label>
      <h1 data-testid="test">Hola Mundo</h1>
      <img src={alien} alt="alien" />
    </div>
  )
}
export default Text;