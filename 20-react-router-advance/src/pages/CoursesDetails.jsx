import React from 'react'
import { useParams } from 'react-router-dom';

const CoursesDetails = () => {
    // useParams helps use parameter in dynamic routings
    const params = useParams();

  return (
    <div>
        <h1>{params.courseId} Courses details</h1>
    </div>
  )
}

export default CoursesDetails