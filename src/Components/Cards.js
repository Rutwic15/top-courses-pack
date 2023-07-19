import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses = props.courses;
    const [likedCourses,setLikedCourses] = useState([]);
    function getCourses(){
        let allCourses = [];
        //console.log(courses);
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        console.log(allCourses)
        return allCourses;
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            /* The below statement only runs when courses are not null  */
            courses && getCourses().map((course)=>(
                <Card key={course.id} course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}/>
            ))
        }
    </div>
  )
}

export default Cards