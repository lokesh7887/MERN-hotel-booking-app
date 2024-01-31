
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  } from 'react-router-dom';
import Layout from './layouts/layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';


// this is the space where we gone build the routes for our app 
//layout is the homepage component of our aapplication
const App=()=>{
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Layout>
        <p>Home page</p>
      </Layout>}/>        
      <Route path="/search" element={<Layout>
        <p>search page</p>
      </Layout>}/>

     <Route path="/register" element={<Layout>
      <Register/>
      </Layout>}/>

      <Route path="/sign-in" element={<Layout>
        <SignIn/>
        </Layout>} />

      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
    )
}

export default App;