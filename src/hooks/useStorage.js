import { useEffect, useState } from "react";



const useStorage = (key, initial)=>{

    const [ data, setData ] = useState(initial);
    const [ isLoad, setLoad ] = useState(true);
    const [ isError, setError ] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{

            try{
                const datas = localStorage.getItem(key);
                let jsonData;

                if(datas){ jsonData = JSON.parse(datas); } else { jsonData = initial; };

                setData(jsonData);
                setLoad(false);
            }catch(error){
                setError(true);
            }

        }, 5000);
    });

    const saveData = (dato)=>{
        localStorage.setItem(key, JSON.stringify(dato));
        setData(dato);
    };


    return {
        saveData,
        isError,
        isLoad,
        data       
    };


};

export default useStorage;