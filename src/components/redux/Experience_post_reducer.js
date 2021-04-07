const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

let initial_state = {
  Experience_post_description: [{ text: "Hello" }],

  CurrentText: "Hello I work!And i dont stop to do it",
};


const Experience_post_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ChangeProfilePageText:
      return { 
        ...state,
        CurrentText : action.CurrentProfilePageText,
      }
    case AddTextProfilePage:
      let newTextProfilePage = {
        text: state.CurrentText,
      };

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
