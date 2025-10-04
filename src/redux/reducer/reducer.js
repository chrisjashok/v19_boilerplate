const initialState = {
  loading: false,
  home: null,
  user:null,
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
    case 'CREATE_USER_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_USER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'CREATE_USER_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
