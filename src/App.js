import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Header from "./components/Header";
import pages from "./navigation/navPages";

import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header id=""/>
        {pages.map((page) => (
          <React.Fragment key={page.href}>{page.section}</React.Fragment>
        ))}
        {/* <Footer /> */}        
      </Provider>
    </div>
  );
}

export default App;
