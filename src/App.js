import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<AddBlog/>} />
        <Route path='/edit/:id' element={<EditBlog/>}/>
        <Route path='/showBlog/:id' element={<ShowBlog/>} />
      </Routes>

    </div>
  );
}

export default App;
