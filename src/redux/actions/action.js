import { toast } from "react-toastify";
import axiosInstance from "../../utills/axiosInstance";

export const fetchHome = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_HOME_REQUEST' });

    try {
      const response = await axiosInstance.get('getproperties');
      const data = await response?.data;
      dispatch({ type: 'FETCH_HOME_SUCCESS', payload: data[0] });
    } catch (error) {
      dispatch({ type: 'FETCH_HOME_FAILURE', error: error.message });
    }
  };
};

export const createUser = (params)=>{
   return async (dispatch)=>{
    dispatch({type:'CREATE_USER_REQUEST'});
    try{
      const response = await axiosInstance.post('postuser',params);
      const data = await response?.data;
      toast.success("Success")
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: data});
    }catch (error) {
      dispatch({ type: 'CREATE_USER_FAILURE', error: error.message });
    }
   }
}