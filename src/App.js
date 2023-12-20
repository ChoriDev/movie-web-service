import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.js";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Click Me!!"} />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
