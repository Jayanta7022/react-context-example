import React, { useContext } from "react";
import Panel from "./Panel";
import Button from "./Button";

function Form() {
  return (
    <div>
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    </div>
  );
}

export default Form;
