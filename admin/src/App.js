import { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/registration/login/Login';
import ListUser from './pages/list/ListUser';
import SingleUser from './pages/users/singleUser/SingleUser';
import NewUser from './pages/users/newUser/NewUser';
import ListBooks from './pages/books/listbooks/ListBooks';
import RequestedBooks from './pages/books/requestedbooks/RequestedBooks';
import NewBooks from './pages/books/newbooks/NewBooks';
import Profile from './pages/profile/mainprofile/Profile';
import UpdateUser from './pages/users/updateUser/UpdateUser';
import ProfileUpdate from './pages/profile/profileupdate/ProfileUpdate';
import {
  addNewBook,
  newUserInput,
  profileUpdate,
  updateBook,
  updateUser,
} from './formSource';
import UpdateBook from './pages/books/updateBook/UpdateBook';
import { AuthContext } from './context/AuthContext';
import Register from './pages/registration/register/registration';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  return (
    <Router>
      <Routes>
        {/* For the profile update of Admin */}
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="profileUpdate"
            element={
              <ProtectedRoute>
                <ProfileUpdate
                  inputs={profileUpdate}
                  title="Update Personal Account"
                />
              </ProtectedRoute>
            }
          />
          {/* For list of user with update options */}
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ListUser />
                </ProtectedRoute>
              }
            />
            <Route
              path=":userId"
              element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="newUser"
              element={
                <ProtectedRoute>
                  <NewUser title="Add New User" inputs={newUserInput} />
                </ProtectedRoute>
              }
            />
            <Route
              path="updateUser/:userId"
              element={
                <ProtectedRoute>
                  <UpdateUser inputs={updateUser} title="Update User" />
                </ProtectedRoute>
              }
            />
          </Route>
          {/* for list of books and update options */}
          <Route path="books">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ListBooks />
                </ProtectedRoute>
              }
            />
            <Route
              path="requestedBook"
              element={
                <ProtectedRoute>
                  <RequestedBooks />
                </ProtectedRoute>
              }
            />
            <Route
              path=":bookId"
              element={
                <ProtectedRoute>
                  <UpdateBook inputs={updateBook} title="Update Book" />
                </ProtectedRoute>
              }
            />
            <Route
              path="newBook"
              element={
                <ProtectedRoute>
                  <NewBooks inputs={addNewBook} title="Add New Book" />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
