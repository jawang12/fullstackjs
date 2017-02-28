/* -----------------    ACTIONS     ------------------ */

const EXAMPLE = 'EXAMPLE';


/* -----------------    ACTION CREATORS   ------------------ */

export const hello = (string) => {
  return {
    type: EXAMPLE,
    string
  };
};


/* -----------------    REDUCERS     ------------------ */

const reducer = (state = '', action) => {
  switch (action.type) {
    case EXAMPLE:
      return action.string;
    default:
      return state;
  }
};

export default reducer;
