import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios'
export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body =null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);



      try {
      
        const  responseData= await  axios({
          method: method,
          url: url
        }) .catch(function (error) {
          
          if (error.response) {
            setError(error.message);
            setIsLoading(false);
            throw error;
            
          }
        });
     
        
 

     

       setIsLoading(false);
        return responseData;
      } catch (err) {

        if(err.message==='Request failed with status code 401'||err.message===`Cannot read property 'code' of undefined`)
        err.message='invaild email or password'
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
