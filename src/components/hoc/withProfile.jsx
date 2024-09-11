import axios from "axios"
import { useState,useEffect } from "react"


export const withProfile = (Component)=>{

    return ()=>{

       const [profileData,setProfileData]= useState({})
       
       useEffect(()=>{
        fetchData()
       },[])
       
       const fetchData=async()=>{
        const {status,data} = await axios.get('https://dummyjson.com/users/1')
        if(status===200){
            setProfileData(data)
        }
       }
       return <Component profile={profileData}/>
    }
}