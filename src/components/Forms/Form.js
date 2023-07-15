import FormInput from "./FormInput";


const Form = (props) => {
  const submittedValues = (enteredValues) =>{
    props.onFormSubmit(enteredValues);
  }

  return(
    <FormInput onSubmitHandler={submittedValues} />
  );
}

export default  Form;