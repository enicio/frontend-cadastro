import React from 'react';
import './cards.css'

function Card({data}) {
  const { name, lastname, address, phone, email,  } = data;
  console.log(data.name)
  return(
    <div className="card">
      <div className="names">
        <h3>{name}</h3>
        <h3>{lastname}</h3>
      </div>
      <div className="dados">
          <h4>{address}</h4>
          <h4>{phone}</h4>
          <h4>{email}</h4>
      </div>
    </div>
  );
}

export default Card;