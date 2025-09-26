
//custom hook for fetching currency data
import {useEffect,useState} from "react";
function useCurrencyinfo(currency){

    //data variable to store the json response
    const [data,setData]=useState({})
    //gets called when component is mounted
    useEffect(() => {
        // fetch api to access currency data
        // this returns a promise that resolves to a response object
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.9.26/v1/currencies/${currency}.json`)
           //now the response is parsed into the actual json
            //this too is a promise which resolves to response object
            .then(res=>res.json())
            //and now finally the response(now json) is stored in data
            .then(res=>setData(res[currency]))



    }, [currency]);



    // console.log(data) will print the value of data as it exists when the effect runs, not after the fetch completes.
    // As a result, when the hook is called, console.log(data) logs the initial value (empty object) and not the fetched data.
    // that's why we make a separate hook for it here

    // useEffect(() => {
    //     console.log((data))
    //     console.log((Object.keys(data)))
    // }, [data]);

    return data;
}
export default useCurrencyinfo;