import "./App.css";
import React from "react";
import { render } from "@testing-library/react";
import LeftBar from "../LeftBar/LefBar";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializedApp } from "../redux/app_reducer";
import Preloader from "../common/preloader";
import Main_content_block from "../MainContentBlock/MainContentBlock";


class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp()
}
  render() {
    if (!this.props.initialStatus) {
      return (<Preloader/>)
    }
    return (
      <BrowserRouter>
        <div className="wrapper">
          <LeftBar />
            <Main_content_block state={this.props.state} dispatch={this.props.dispatch} />
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialStatus : state.App.initialStatus
})

export default compose(
  connect(mapStateToProps, {initializedApp}),
)
(App)
