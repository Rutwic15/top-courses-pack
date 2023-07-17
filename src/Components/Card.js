import React from 'react'
import {FcLike} from "react-icons/fc";
const Card = (props) => {
  let Course = props.course;
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
        <div>
            <img src={Course.image.url} alt={Course.image.alt}></img>
            <div>
                <button>
                <FcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>
        <div>
            <p>{Course.title}</p>
            <p>{Course.description}</p>
        </div>
    </div>
  );
}

export default Card