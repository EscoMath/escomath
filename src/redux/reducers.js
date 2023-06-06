import { GET_ALL_COURSE, GET_ALL_COURSES } from "./actions"

export const courseReducer = ( state = {}, action) => {
  if ( action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.courses
    }

  }

  if ( action.type === GET_ALL_COURSE) {
    return {
      ...state,
      course: action.course
    }

  }
  
  return state
}
