import "./Experience_post.css";
import React from "react";
import Experience_post from "./Experience_post";
import { connect } from "react-redux";
import { ChProfilePageText, Return_MessageText } from "../../../redux/Experience_post_reducer";



let mapStateToProps = (state) => {
  return {
    Experience_post : state.Experience_post,
  }
}

let Experience_post_container_con = connect(mapStateToProps, {ChProfilePageText, Return_MessageText})(Experience_post)

export default Experience_post_container_con;