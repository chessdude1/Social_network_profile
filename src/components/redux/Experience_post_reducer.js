const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

let initial_state = {
  Experience_post_description: [],

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

      return { 
        ...state,
        Experience_post_description : [...state.Experience_post_description, newTextProfilePage],
        CurrentText: ' ',

      }

    default:
      return state;
  }
};

export const ChProfilePageText = (textProfilePage) => {
  return {
    type: ChangeProfilePageText,
    CurrentProfilePageText: textProfilePage,
  };
};

export const Return_MessageText = () => {
  return { type: AddTextProfilePage };
};

export default Experience_post_reducer;
