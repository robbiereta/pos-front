import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import useForm from 'react-hook-form';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';



function YourForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log('data: ', data)
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example')) // you can watch individual input by pass the name of the input
  console.log(errors);
  return (
    
    
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Clientes</h5>
        <p class="card-text">Por favor ingrese sus datos fiscales exactamente como en su cedula fiscal mas reciente.</p>
        <form className="form-outline" onSubmit={handleSubmit(onSubmit)}>
      {/* you will have to register your input into react-hook-form, by invoke the register function with ref as the argument */}
    
      <input name="rs"
        ref={register({ required: true })}
        placeholder="razon social"
   id="first_name" type="text" className="form-control" />
          <label htmlFor="first_name" className="form-label">razon social</label>
  
      {errors.example && '<span>This field is required</span>'}
      <input type="submit" class="btn btn-primary btn-block mb-4"/>
    </form>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <YourForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
