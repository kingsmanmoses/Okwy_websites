import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screen/home/Home';
import Books from './screen/book/Books';
import BookRequest from './screen/bookRequest/BookRequest';
import EachBook from './screen/eachbook/EachBook';
import Profile from './screen/profile/Profile';
import ProfileUpdate from './screen/profile/Profile_update/ProfileUpdate';
import Login from './components/registeration/login/Login';
import Register from './components/registeration/register/registration';

function App() {
  return (
    // <Register />
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="books">
            <Route index element={<Books />} />
          </Route>
          <Route path="Brequest">
            <Route index element={<BookRequest />} />
            <Route path=":BrequestId" element={<EachBook />} />
          </Route>
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="profileUpdate" element={<ProfileUpdate />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
