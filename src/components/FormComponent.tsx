import React, { useState, ChangeEvent, FormEvent } from 'react';

function FormComponent() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
