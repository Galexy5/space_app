import  {useState,useEffect} from "react";


export function MarsApi(url) {
    const [request, setRequest] = useState([]);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setRequest(result);
        });
    }, []);
  
    return request;
  }
  