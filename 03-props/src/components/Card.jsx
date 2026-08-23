import React from 'react'

const Card = ({user, img}) => {
  return (
      <div className="card">
        <img src={img} alt={user}/>
        <h1>{user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button>View profile</button>
      </div>
  )
}

export default Card