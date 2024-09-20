import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MyNotes from '../pages/MyNotes';
import AddNotes from '../pages/AddNotes';
import Navbar from '../components/Navbar';

const AuthRoute = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MyNotes />} path='//my-notes' />
        <Route element={<AddNotes />} path='/add-note' />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AuthRoute;
