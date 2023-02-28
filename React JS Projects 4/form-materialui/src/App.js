import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [nation, setNation] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      email,
      qualification,
      nation,
      contact,
      designation,
    });
  };

  return (
    <>
      <>
        <h1>Form with inputs preview</h1>
        <h2>Data Preview:</h2>
        <p>
          <strong>First Name: {firstName}</strong> <br></br>{" "}
          <strong>Last Name: {lastName}</strong> <br></br>{" "}
          <strong>Age: {age}</strong> <br></br>{" "}
          <strong>
            Email:
            {email}
          </strong>{" "}
          <br></br>
          <strong>Qualification: {qualification}</strong> <br></br>{" "}
          <strong>Nation: {nation}</strong> <br></br>{" "}
          <strong>Contact: {contact}</strong> <br></br>
          <strong>Designation: {designation}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Age"
            variant="outlined"
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <TextField
            label="Qualification"
            variant="outlined"
            margin="normal"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
          <TextField
            label="Nation"
            variant="outlined"
            margin="normal"
            value={nation}
            onChange={(e) => setNation(e.target.value)}
          />
          <TextField
            label="Contact"
            variant="outlined"
            margin="normal"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            label="Designation"
            variant="outlined"
            margin="normal"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: 100 }}
          >
            Submit
          </Button>
        </form>
      </>
    </>
  );
}

export default App;
