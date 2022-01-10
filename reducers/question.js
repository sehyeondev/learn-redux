export const SET_TITLE = 'SET_TITLE'
export const SET_DESC = 'SET_DESC'

export const setTitle = (title) => ({
    type: SET_TITLE,
    payload: title,
});

export const setDesc = (desc) => ({
  type: SET_DESC,
  payload: desc,
})

const initialState = {
    title: "",
    desc: "",
}

const question = (state = initialState, action) => {
    switch (action.type) {
        case (SET_TITLE): {
            return {
                ...state,
                title: action.payload,
            }
        }
        case (SET_DESC): {
          return {
              ...state,
              desc: action.payload,
          }
      }
        default:
            return state;
    }
}

export default question;
