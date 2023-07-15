import logo from './logo.svg';
import './App.css';
import Form from './components/Forms/Form';
import Result from './components/Results/Result';

function App() {
  const formSubmittedValuesHadler = (submittedValues) => {
    console.log(submittedValues);
  }
  return (
    <div>
      <Form onFormSubmit={formSubmittedValuesHadler} />
      <Result />
    </div>
  );
}

export default App;
