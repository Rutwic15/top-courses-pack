import React from 'react'
import {toast} from "react-toastify";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
const Card = (props) => {
  let Course = props.course;
  let likedCourses = props.likedCourses;//tracks which courses are liked
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    //logic
    if(likedCourses.includes(Course.id)){
      //first remove the like
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== Course.id)));
      toast.warning("like removed")
    }
    else{
      //there is no like
      //insert into liked courses
      if(likedCourses.length === 0){
        setLikedCourses([Course.id]);
      }
      else{
        //non-empty
        setLikedCourses((prev) => [...prev,Course.id]);
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={Course.image.url} alt={Course.image.alt}></img>
            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                 {
                   likedCourses.includes(Course.id)?
                   (<FcLikePlaceholder fontSize="1.75rem"/>):(
                    <FcLike fontSize="1.75rem"/>
                   )
                 }
                </button>
            </div>
        </div>
        <div>
            <p className='text-white font-semibold text-lg leading-6'>{Course.title}</p>
            <p className='mt-2 text-white'>
            {
              Course.description.length > 100 ? 
              (Course.description.substr(0,100))+ "...":(
                Course.description
              )
            }
            </p>
        </div>
    </div>
  );
}

export default Card