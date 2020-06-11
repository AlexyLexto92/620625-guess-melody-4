import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";
const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {gameTime, errorCount} = props;
  return (
    <WelcomeScreen errorCount={errorCount} gameTime = {gameTime} />
  );
};


export default App;
