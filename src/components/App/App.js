import "./App.css";
import { render } from "@testing-library/react";
import LeftBar from '../LeftBar/LefBar'
import Main_content_block from '../MainContentBlock/MainContentBlock';


const App = () => {
  return (
    <div className="wrapper"> 
        <LeftBar/>
        <Main_content_block/>
    </div>
  );
};

export default App;
