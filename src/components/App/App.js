import "./App.css";
import { render } from "@testing-library/react";
<<<<<<< HEAD
<<<<<<< HEAD
import LeftBar from "../LeftBar/LefBar";
import Main_content_block from "../MainContentBlock/MainContentBlock";
import { BrowserRouter } from "react-router-dom";
=======
import LeftBar from '../LeftBar/LefBar'
import Main_content_block from '../MainContentBlock/MainContentBlock';
>>>>>>> parent of 5ed0742 (add_second_page)

const App = (props) => {
  return (
<<<<<<< HEAD
=======
import LeftBar from '../LeftBar/LefBar'
import Main_content_block from '../MainContentBlock/MainContentBlock';
import { BrowserRouter } from "react-router-dom";
const App = (props) => {
  return (  
>>>>>>> parent of 5afe556 (React_redux-add)
    <BrowserRouter>
    <div className="wrapper"> 
        <LeftBar />
        <Main_content_block state={props.state} />
    </div>
    </BrowserRouter>
=======
    <div className="wrapper"> 
        <LeftBar/>
        <Main_content_block/>
    </div>
>>>>>>> parent of 5ed0742 (add_second_page)
  );
};

export default App;
