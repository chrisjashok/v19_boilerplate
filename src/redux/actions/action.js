export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAILURE', error: error.message });
    }
  };
};
