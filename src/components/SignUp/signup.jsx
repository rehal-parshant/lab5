import React,{useState} from 'react'
import './index.css'
import axios from 'axios';
function Signup() {
    const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    console.log('userId 👉️', userId);
    console.log('lastName 👉️', title);
    setUserId('');
    setTitle('');
    axios.post('https://jsonplaceholder.typicode.com/photos', {
        userId: userId,
        title: title
      })
      .then(function (response) {
        console.log("Added Record 👉️",response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
  <>
   <form onSubmit={handleSubmit} className="signupForm container text-center mt-5">
     <div>
      <hr/><h3>Task 2</h3>
     <input
          id="userId"
          name="userId"
          type="text"
          onChange={event => setUserId(event.target.value)}
          value={userId}
        />
     </div>
      <div>
      <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>

        <div>
        <button type="submit">Submit form</button>
        </div>
    </form>
  </>
  )
}

export default Signup