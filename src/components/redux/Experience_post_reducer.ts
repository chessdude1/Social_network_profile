const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";

let initial_state = {
  Experience_post_description: [] as any,
  CurrentText : '' as string
};

export type initial_state_type = typeof initial_state


const Experience_post_reducer = (state = initial_state, action : any) : initial_state_type => {
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

export type ChProfilePageText_type = {
  type : typeof ChangeProfilePageText,
  CurrentProfilePageText : string
}

export type Return_MessageText_type = {
  type : typeof AddTextProfilePage
}

export const ChProfilePageText = (textProfilePage : string) :  ChProfilePageText_type => {
  return {
    type: ChangeProfilePageText,
    CurrentProfilePageText: textProfilePage,
  };
};

export const Return_MessageText = () : Return_MessageText_type  => {
  return { type: AddTextProfilePage };
};

export default Experience_post_reducer;
