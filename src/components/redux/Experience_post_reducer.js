const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

let initial_state = {
  Experience_post_description: [{ text: "Hello" }],

  CurrentText: "Hello I work!And i dont stop to do it",
};


const Experience_post_reducer = (state = initial_state, action) => {
  window.state = state
  switch (action.type) {
    case ChangeProfilePageText:
      // let state_copy = { ...state };
      // state_copy.CurrentText = action.CurrentProfilePageText;
      // return state_copy;
      return { 
        ...state,
        CurrentText : action.CurrentProfilePageText,
      }
    case AddTextProfilePage:
      // let state_cop2 = { ...state };
      let newTextProfilePage = {
        text: state.CurrentText,
      };
      // state_cop2.Experience_post_description.push(newTextProfilePage);
      // state_cop2.CurrentText = "";
      // return state_cop2;
      window.newTextProfilePage = newTextProfilePage;
      debugger
      return { 
        ...state,
        Experience_post_description : [...state.Experience_post_description, newTextProfilePage],
        CurrentText: ' ',

      }

    default:
      return state;
  }
};

export default Experience_post_reducer;
