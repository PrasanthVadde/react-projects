




const MainHeading=(prop)=>{
    console.log(prop,"main heading prop")
    const{heading,children}=prop
    return(
  
<div>
    {children}
   
        <h1>{heading}</h1>
        </div>


    )
}
export default MainHeading

 export const SecondaryHeading=(prop)=>{
    const{heading}=prop
    return(


 
        <h2>{heading}</h2>

    )
}

