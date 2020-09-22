import { useState, useEffect } from 'react';
import httpService from '../services/http.services';

const useAsyncTask = (url) => {
    const [response, setResponse] = useState();

    useEffect(() => {
        const getShareData = async () => {
            const res = await httpService(url);
            setResponse(res);
        }
        getShareData();
    }, [url]);
    
    return response;
}

export default useAsyncTask;