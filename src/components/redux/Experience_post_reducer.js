const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

let initial_state = {
  Experience_post_description: [{ text: "Hello" }],

  CurrentText: "Hello I work!And i dont stop to do it",
};

const Experience_post_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ChangeProfilePageText:
      state.CurrentText = action.CurrentProfilePageText;
      return state;
    case AddTextProfilePage:
      let newTextProfilePage = {
        text: state.CurrentText,
      };
      state.Experience_post_description.push(newTextProfilePage);
      state.CurrentText = "";
      return state;
    default:
      return state;
  }
};

export default Experience_post_reducer;
