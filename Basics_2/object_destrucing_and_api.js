//object destructuring

const course = {
    name : "AWS Pro",
    duration : 20,
    courseInstructor : "Stephan Mareek"
}

const {courseInstructor} = course //object destructured
console.log(courseInstructor); // here instead of using course.courseInstructor again and again, we've destrutured it in above
// line so we can directly access it by using the name of the key which is 'courseInstructor'

// if the name of key is very long and we want to give any short name to it then-
const {duration : dur} = course
console.log(dur);