const initialState = {
  loading: false,
  home: null,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HOME_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_HOME_SUCCESS':
      return { ...state, loading: false, home: action.payload };
    case 'FETCH_HOME_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default homeReducer;
