import React from "react";
import ReactDOM from "react-dom";
import initStoryshots from "@storybook/addon-storyshots";
import App from "./App";

initStoryshots();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
