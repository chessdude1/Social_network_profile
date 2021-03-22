import "./App.css";
import { render } from "@testing-library/react";
import LeftBar from '../LeftBar/LefBar'
import Main_content_block from '../MainContentBlock/MainContentBlock';
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className="wrapper"> 
        <LeftBar/>
        <Main_content_block/>
    </div>
    </BrowserRouter>
  );
};

export default App;
