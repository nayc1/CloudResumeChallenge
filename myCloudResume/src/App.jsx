import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './pages/profilepage/profile.jsx'
import FuturePage from'./pages/futurePage/futurePage.jsx' 

function App() {

  return (
    <>

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = { <Profile></Profile>}></Route>
          <Route path ="/home" element = {<Profile></Profile>}></Route>
          <Route path ="/future_projects" element ={<FuturePage></FuturePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
  );
  
}

export default App
