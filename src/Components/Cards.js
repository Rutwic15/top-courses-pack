import React from 'react'
import Card from './Card';
const Cards = ({courses}) => {
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
    <div>
        {
            /* The below statement only runs when courses are not null  */
            courses && getCourses().map((course)=>(
                <Card key={course.id} course={course}/>
            ))
        }
    </div>
  )
}

export default Cards