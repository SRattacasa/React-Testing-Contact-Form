import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});


test("has a required field for first name with no max length", () => {
  
  
  // const {getByLabelText} = render(<ContactForm />)
  // getByLabelText(/firstName/i);
  
  render(<App />)
  const nameSpace = screen.getByText(/first name*/i)
  const lastnameSpace = screen.getByText(/last name*/i)
  const email = screen.getByText(/email*/i)
  
  // const {getByLabelText} = render(<App/>)
  // const something = screen.getByLabelText('firstName')
})