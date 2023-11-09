import React, { useState } from "react";

const InputFirstLastToggle = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [putnik, setputnik] = useState(false);

  function handleFirstNameChange(e) {
    setfirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }
  function handlePutnikChange(e) {
    setputnik(e.target.checked);
  }
  const fullName = firstName + " " + lastName;
  return (
    <div>
      <label htmlFor="firstName">First name: </label>
      <input id="firstName" type="text" onChange={handleFirstNameChange} />
      <label htmlFor="LastName">Last name: </label>
      <input
        id="LastName"
        type="text"
        checked={putnik}
        onChange={handleLastNameChange}
      />

      <input
        type="checkbox"
        name="putnik"
        id="putnik"
        onChange={handlePutnikChange}
      />
      <label id="putnik" htmlFor="putnik">
        Putnik sam
      </label>
      <p>
        Bok, ja sam{" "}
        <b>
          {fullName}, rođen sam {1960} i{" "}
          {putnik ? "Putnik sam" : "nisam putnik"}
        </b>
      </p>
      <button onClick={() => alert("Bok " + fullName)}>Reci Bok osobi</button>
    </div>
  );
};

export default InputFirstLastToggle;
