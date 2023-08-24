import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './NavPages/about/About';
import Cctv from './NavPages/courses/detailedCourses/pages/Cctv';
import Dstv from './NavPages/courses/detailedCourses/pages/Dstv';
import Web from './NavPages/courses/detailedCourses/pages/Web';
import Solar from './NavPages/courses/detailedCourses/pages/Solar';
import Contact from './NavPages/contact/Contact';
import Networking from './NavPages/courses/detailedCourses/pages/Networking';
import Sql from './NavPages/courses/detailedCourses/pages/Sql';
import Myreact from './NavPages/courses/detailedCourses/pages/Myreact';
import Ui from './NavPages/courses/detailedCourses/pages/Ui';
import Hard from './NavPages/courses/detailedCourses/pages/Hard';
import Ms from './NavPages/courses/detailedCourses/pages/Ms';
import Graphics from './NavPages/courses/detailedCourses/pages/Graphics';

const LazyCourses = React.lazy(() => import('./NavPages/courses/CoursesPage'));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route
            path="/courses"
            exact
            element={
              <React.Suspense fallback="loading...">
                <LazyCourses />
              </React.Suspense>
            }
          />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cctv" exact element={<Cctv />} />
          <Route path="/dstv" exact element={<Dstv />} />
          <Route path="/web" exact element={<Web />} />
          <Route path="/solar" exact element={<Solar />} />
          <Route path="/network" exact element={<Networking />} />
          <Route path="/mysql" exact element={<Sql />} />
          <Route path="/react" exact element={<Myreact />} />
          <Route path="/ui" exact element={<Ui />} />
          <Route path="/hardware" exact element={<Hard />} />
          <Route path="/msword" exact element={<Ms />} />
          <Route path="/design" exact element={<Graphics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
