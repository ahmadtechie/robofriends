import React from "react";
import "tachyons";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}`} alt='robots' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
