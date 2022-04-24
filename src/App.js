import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import Lamp from './Lamp';
import Comps from './components/comps/comps';
import NewUser from './components/newUser/newUser';

import LightSwitch from './LightSwitch';
import { render } from '@testing-library/react';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {
  // Lamp one
  // const [isLampOneOn, setIsLampOneOn] = useState(false);
  // // Lamp two
  // const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  // const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  // const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);
const goAdd=()=>{
return (<div>here u can add new user</div>)

}
  return (
    // <Room>
    //   <Lamp lampOn={isLampOneOn} position='left' />
    //   <Lamp lampOn={isLampTwoOn} position='right' />
    //   <LightSwitch
    //     name='one'
    //     callback={handleLightSwitchOne}
    //     switchOn={isLampOneOn}
    //     position='left'
    //   />
    //   <LightSwitch
    //     name='two'
    //     callback={handleLightSwitchTwo}
    //     switchOn={isLampTwoOn}
    //     position='right'
    //   />
    // </Room>
    <div>
      
<NewUser></NewUser>    
  <Comps name="h"></Comps>

       <button onClick={goAdd}>add new  </button>
   </div>
   
  );
}

export default App;
