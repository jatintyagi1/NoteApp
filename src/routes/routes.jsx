import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MyNotes from '../pages/MyNotes';
import AddNotes from '../pages/AddNotes';
import Navbar from '../components/Navbar';
import Signup from '../components/SignUp';
import Login from '../components/Login';
import Profile from '../pages/Profile';

const AuthRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-notes" element={<MyNotes />} />
        <Route path="/add-note" element={<AddNotes />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AuthRoute;
