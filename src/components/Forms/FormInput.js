import {useState} from 'react';

const FormInput = (props) => {
  const[enteredValue, setEnteredValue] = useState({
    username: '',
    age: ''
  });

  const[formError, setFormError] = useState({
    state: false,
    type: ''
  })

  const inputHandler = (event) => {
    setEnteredValue({
      ...enteredValue,
      [event.target.name]: event.target.value
    })
  }

  const modalHandler = () => {
    setFormError({
      state: false
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.age === '' || enteredValue.username === '') {
      setFormError({
        state: true,
        message: 'Please fill all the fields.'
      })
      return;
    }
    else if(enteredValue.age < 0) {
      setFormError({
        state: true,
        message: 'Age can\'t be less than 0.'
      })
      return;
    }
    else {
      setFormError({
        state: false
      })
    }
    props.onSubmitHandler(enteredValue);
    setEnteredValue({
      username: '',
      age: ''
    });
  }


  return(
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Username</label>
          <input type="text" onChange={inputHandler} value={enteredValue.username} name="username" />
        </div>
        <div className="input">
          <label>Age(Years)</label>
          <input type="number" onChange={inputHandler} value={enteredValue.age} name="age" />
        </div>
        <div className="input btn">
          <button className="button" type="submit">Add User</button>
        </div>
      </form>
      {formError.state ? 
        <div className="backdrop">
          <div className="modal">
            <div className="header">
              <h2>Error</h2>
            </div>
            <div className="content">
              <p>{formError.message}</p>
              <div className="input">
                <button className="button modal-btn" onClick={modalHandler}>Ok</button>
              </div>
            </div>
          </div>
        </div>
        : ''
      }
  </div> 
  );
}

export default FormInput;