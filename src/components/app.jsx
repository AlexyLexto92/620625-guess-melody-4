import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "./welcome-screen.jsx";
const App = (props) => {
  const {gameTime, errorCount} = props;
  return (
    <WelcomeScreen errorCount={errorCount} gameTime = {gameTime} />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};
export default App;
