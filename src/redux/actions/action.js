export const fetchHome = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_HOME_REQUEST' });

    try {
      const response = await fetch('http://localhost:3000/getproperties');
      const data = await response.json();
      
      dispatch({ type: 'FETCH_HOME_SUCCESS', payload: data[0] });
    } catch (error) {
      dispatch({ type: 'FETCH_HOME_FAILURE', error: error.message });
    }
  };
};
