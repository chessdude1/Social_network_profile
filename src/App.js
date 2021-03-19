import logo from "./logo.svg";
import "./styles/App.css";
import { render } from "@testing-library/react";
import LeftBar from './components/LefBar'
import Main_content_block from "./components/MainContentBlock";

const App = () => {
  return (
    <div className="wrapper">
        <LeftBar/>
        <Main_content_block/>
    </div>
  );
};

export default App;
