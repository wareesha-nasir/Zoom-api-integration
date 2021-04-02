import { useState} from 'react';
import Zoom from './zoom';
import './App.css';



function App() {
  const[joinMeeting,setJoinMeeting]= useState(false)

return (
  <div className="App">
    {joinMeeting?(<Zoom/>):(
      <div>
        <label>email</label>
    <input name="email" type="email"/><br/>
    <label>name</label>
    <input name="name" type="text"/><br/>
    <label>password</label>
    <input name="password" type="password"/><br/>
    <button className="meet-btn" onClick={()=>setJoinMeeting(true)}>join Meeting</button>
    </div>
    )
}
  </div>
)
  
}

export default App;