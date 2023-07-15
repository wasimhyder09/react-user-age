import './App.css';
import Form from './components/Forms/Form';
import Result from './components/Results/Result';
import { useState } from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);
  const formSubmittedValuesHadler = (submittedValues) => {
    setUsersList((prevState) => {
      return[...prevState, {username: submittedValues.username, age: submittedValues.age}];
    })
  }
  return (
    <div>
      <Form onFormSubmit={formSubmittedValuesHadler} />
      {usersList.length ? 
        <Result data={usersList} />
        : <p className='no-results'>No users found. Maybe add one?</p>
      }
    </div>
  );
}

export default App;
