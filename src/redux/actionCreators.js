import Axios from "axios";
import { GET_ALL_COURSE, GET_ALL_COURSES } from "./actions";


const API_URL = process.env.REACT_APP_API_URL;

export const getAllCourses = () => dispatch => {
  Axios.get(`${API_URL}/cursos`)
  .then( resp => {
    return dispatch({
      type: GET_ALL_COURSES,
      courses: resp.data
    })
  })
}

export const getCourse = (id) => dispatch => {
  Axios.get(`${API_URL}/cursos/${id}`)
  .then( resp => {
    return dispatch({
      type: GET_ALL_COURSE,
      course: resp.data
    })
  })
}
