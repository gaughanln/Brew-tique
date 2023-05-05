import UPDATE_USER from './actions';












export default function reducer() {

}


// TODO code from 22 state #8 for reference 

// case UPDATE_STUDENT: {
//   const studentIndex = state.students.findIndex(
//     (student) => student.id === action.payload.id
//   );

//   // Variable to hold our student object
//   const updatedStudent = {
//     ...state.students[studentIndex],
//     ...action.payload,
//   };

//   // Make a copy of our current students array
//   const newStudentsList = [...state.students];

//   // Assign the updated student to their existing position in the newStudentsList
//   newStudentsList[studentIndex] = updatedStudent;

//   return {
//     ...state,
//     students: newStudentsList,
//   };
// }