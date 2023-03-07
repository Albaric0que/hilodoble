/* import React from 'react'

function Catalog() {

  const [ catalog, setCatalog ] = useState([])
  useEffect(() =>{
      fetch("urldelaapi")
      .then ((res)=>res.json())
      .then ((data)=>setCatalog(data.results))
  },[])

  return (
    <>
    {catalog.map((catalog)=>{
      return(
        <div key={catalog.id}>
          <p>{catalog.name}</p>
          <Link to={`/card/${card.id}`}><img src={card.image} alt={card.name}/></Link>
        </div>
      )
    })}
    </>
  )
}

export default Catalog */