import { useEffect, useState } from "react"
import ContryData from "./ContryData/contryData"

export default function ContriFet() {

    const [contry, setContry] = useState([])

    const [visitedContry, setVisitedContri] = useState([])

    useEffect(()=>{
 fetch('https://restcountries.com/v3.1/all')
 .then(res => res.json())
 .then(data => setContry(data))
    } ,[])

    const visitedHandale = (contri)=>{
      const newvisitedContry = [...visitedContry,contri];
      setVisitedContri(newvisitedContry)
    }

  return (
    <div>
<h1 className="h">Contry: {contry.length}</h1>
<h1>{visitedContry.length}</h1>

<ul>
  {
    visitedContry.map((cons)=> <li key={cons.cca3}>{cons.name.common} <img style={{ width: '20px', height:'10px' }} src={cons.flags.png} alt={name?.common} /></li>)
  }
</ul>


<div className="mainData">
{
    contry.map((contris)=> <ContryData key={contris.cca3} contri={contris} visited={visitedHandale}></ContryData>)
}
</div>
    </div>

  )
}
