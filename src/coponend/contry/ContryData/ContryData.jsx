import { useState } from "react";

export default function ContryData({contri,visited}) {
    // console.log(visited)
    const {name,flags,currencies,capital,languages,maps,openStreetMaps,coatOfArms} = contri

    const currencyKey = currencies && Object.keys(currencies)[0];
    const currency = currencyKey && currencies[currencyKey];
    const capitals = capital?.[0] || 'N/A';

    const languagesList = languages && Object.values(languages).join(", ") || "N/A"

  // button handale
  const [handel, setHandale] = useState(false)
 const handlaeClick = ()=>{
  setHandale(!handel)
 }



  return (
    <div className={`data ${handel && 'visited'}`}>
       <h3>contry: {name?.common}</h3>
       <h3>official: {name?.official}</h3>
       <img src={flags.png} alt={name?.common} />
       <h4>Currency Symbol: {currency?.symbol || "N/A"}</h4>
      <h4>Currency Name: {currency?.name || "N/A"}</h4>
      <h4>capital: {capitals}</h4>
      <h4>languages: {languagesList}</h4>
      <h3> <a href={maps.googleMaps} target="_blank">google Maps {name?.common} </a> </h3>
      <h3> <a href={maps.openStreetMaps} target="_blank">open  Street Maps {name?.common} </a> </h3>
      <img className="imgs" src={coatOfArms.png} alt={name?.common} />
      <br/>
      <button onClick={()=>visited(contri)}>mark visited</button>
     <br />
   
     <button onClick={handlaeClick}>{handel ? 'visited' : 'Goin'}</button>
     {handel ? 'I have visited contry' : 'I have not visited'}
    </div>
  )
}
