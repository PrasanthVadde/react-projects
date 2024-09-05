import axios from "axios"
import { useEffect, useState } from "react"



export const ElectronicsScreen=()=>{


    const [data,setData]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
       try{
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics")

        if(response.status ==200){
            setData(response.data)
        }
       }
       catch(err){
        console.error(err)
       }
    }


    return(
        <>
        <h2>Electronics</h2>
        {
            data.map(each=><>
                <pre>{JSON.stringify(each)}</pre>
            </>)
        }
        </>
    )
}