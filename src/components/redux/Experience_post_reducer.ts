import {InferActionsTypes, BaseThunkType} from './redux-store'
const AddTextProfilePage = "AddTextProfilePage";
const ChangeProfilePageText = "ChangeProfilePageText";


let initial_state = {
  Experience_post_description: [] as any,
  CurrentText : '' as string
};

export type initial_state_type = typeof initial_state


const Experience_post_reducer = (state = initial_state, action : actionsTypes) : initial_state_type => {
  switch (action.type) {
    case ChangeProfilePageText:
      return { 
        ...state,
        //@ts-ignore
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

type actionsTypes = InferActionsTypes<typeof actionsExperience_post_reducers>

const actionsExperience_post_reducers = {
  ChProfilePageText : (textProfilePage : string)  => {
    return {
      type: ChangeProfilePageText,
      CurrentProfilePageText: textProfilePage,
    };
  },
  
 Return_MessageText : () => {
    return { type: AddTextProfilePage };
  }
}

export const ChProfilePageText = (textProfilePage : string) :  actionsTypes => {
  return {
    type: ChangeProfilePageText,
    CurrentProfilePageText: textProfilePage,
  };
};

export const Return_MessageText = () : actionsTypes  => {
  return { type: AddTextProfilePage };
};

export default Experience_post_reducer;
