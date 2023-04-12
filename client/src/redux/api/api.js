import axios from 'axios'

// `{${window.location.origin.toString()+'/'+item.id}`

// const url = 'https://localhost:8000/'
const url = 'http://localhost:8080'
const course = 'course'
const auth = 'auth'
const waitlist = 'waitlist'
const classs = 'class'
const admin = 'admin'
const student = 'student'
const registeredCourse = 'registeredcourse'

// auth

export const authLogin = (user) => axios.post(`${url}/${auth}/login`, user)

export const authLogout = () => axios.get(`${url}/${auth}/logout`)

export const authRefresh = () => axios.get(`${url}/${auth}/refresh`)

export const authRegister = (user) => axios.post(`${url}/${auth}/register`, user)


// Registered Course
export const getAllRegisteredCourse = () => axios.get(`${url}/${registeredCourse}`) // get all registered course

export const getRegisteredCourseById = (id) => axios.get(`${url}/${registeredCourse}/${id}`)

export const createRegisteredCourse = (newRegisteredCourse) => axios.post(`${url}/${registeredCourse}/add`, newRegisteredCourse)

export const updateRegisteredCourse = (updatedRegisteredCourse) => axios.put(`${url}/${registeredCourse}/edit`, updatedRegisteredCourse)

// Course
export const getAllCourse = () => axios.get(`${url}/${course}`) // get all course

export const getCourse = (id) => axios.get(`${url}/${course}/${id}`) // get course

export const createCourse = (newCourse) => axios.post(`${url}/${course}/add`, newCourse)

export const updateCourse = (updatedCourse) => axios.put(`${url}/${course}/edit`, updatedCourse)

export const searchCourse = (search) => axios.get(`${url}/${course}/${search}`)

export const deleteCourse = (id) => axios.delete(`${url}/${course}/delete/${id}`)

// Class
export const getAllClass = () => axios.get(`${url}/${classs}`) // for admin

export const getClassById = (id) => axios.get(`${url}/${classs}/${id}`)

export const getClassByCourseID = (id) => axios.get(`${url}/${classs}/course/${id}`)

export const getClassByClassID = (id) => axios.get(`${url}/${classs}/${id}`)

export const createClass = (newClass) => axios.post(`${url}/${classs}/add`, newClass)

export const updateClass = (id, updatedClass) => axios.put(`${url}/${classs}/${id}`, updatedClass)

export const deleteClass = (id) => axios.delete(`${url}/${classs}/delete/${id}`)

// Waitlist
export const getAllWaitlist = (id) => axios.get(`${url}/${waitlist}/${id}`) // get all waitlist

export const createWaitlist = (newWaitlist) => axios.post(`${url}/${waitlist}/add`, newWaitlist)

export const deleteWaitlist = (waitlistNumber, id) => axios.delete(`${url}/${waitlist}/${waitlistNumber}/${id}`)

// Admin
export const getAdmin = (id) => axios.get(`${url}/${admin}/${id}`) 

// Student
export const getAllStudent = (id) => axios.get(`${url}/${student}/`)

export const getStudent = (id) => axios.get(`${url}/${student}/${id}`)

export const createStudent = (newStudent) => axios.post(`${url}/${student}`, newStudent)

export const updateStudent = (id, updatedStudent) => axios.put(`${url}/${student}/${id}`, updatedStudent)

export const deleteStudent = (id) => axios.delete(`${url}/${student}/${id}`)
