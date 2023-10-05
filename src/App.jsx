import React, {useState} from 'react';
import { notifications } from '@mantine/notifications'

const App = () => {
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const submitForm = (event) => {
    event.preventDefault()
    // notifications.show({
    //   title: 'Default notification',
    //   message: 'Hey there, your code is awesome! 🤥',
    // })
    console.log(Email, Password)
  }
  return (
    <div>
      <a href='/contact'>Contact page</a>
      <a href="About">About</a>
      <form onSubmit={submitForm}>
        <input type="Email" placeholder="Enter your email" onChange={(event)=>setEmail(event.target.value)}/>
        <input type="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
   <button onClick={()=>notifications.show({
      title: 'Default notification',
      message: 'Hey there, your code is awesome! 🤥',
      color: 'red'
    })}>Notification</button>
    </div>
  );
}

export default App;
