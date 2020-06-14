import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
const welcomeButtonHandler = () => {};
const App = (props) => {
  const {gameTime, errorCount} = props;
  return (
    <WelcomeScreen errorCount={errorCount} gameTime = {gameTime} onWelcomeButtonClick={welcomeButtonHandler} />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};
export default App;
