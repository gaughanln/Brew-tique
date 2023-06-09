import { 
  ADD_USER, 
  LOGIN_USER, 
  UPDATE_USER, 
  ADD_ADDRESS, 
  DELETE_USER,
} from './actions';
import createId from './createId';


export default function reducer(state, action) {
  switch (action.type) {
    case ADD_USER: {
      const newUserId = createId(state.users);

      const newUser = { ...action.payload, id: newUserId };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }
    case LOGIN_USER: {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        const loggedInUser = state.users[userIndex];
        return {
          ...state,
          loggedInUser: loggedInUser,
        };
      }
      return state;
    }
    case UPDATE_USER: {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      const updatedUser ={
        ...state.users[userIndex],
        ...action.payload,
      };
      const newUsersList = [...state.users];
      newUsersList[userIndex] = updatedUser;
      return {
        ...state,
        users: newUsersList,
      };
    }
    case ADD_ADDRESS: {
      const userIndex = state.users.findIndex((user) => user.id === action.payload.id);
      const updatedUsers = [...state.users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        address: [action.payload],
      };
      return {
        ...state,
        users: updatedUsers,
      };
    }
    case DELETE_USER: {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload
      );
      if (userIndex !== -1) {
        const newUsersList = [...state.users];
        newUsersList.splice(userIndex, 1);
        return {
          ...state,
          users: newUsersList,
        };
      }
      return state;
    }
    case LOGOUT_USER: {
      return {
        ...state,
        loggedInUser: null,
      };
    }
    default:
      return state;
  }
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