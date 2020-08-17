import React, { useState } from 'react';
import './App.css';

function App() {

  function cnpjMask(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5")
  }

  const [valueCnpj, setValueCnpj] = useState()

  function handleChange(event) {
    setValueCnpj(cnpjMask(event.target.value))
  }

  return (
    <div className="form-cnpj">
      <fieldset>
        <legend>
          <h2>Validate CNPJ Format (Mask)</h2>
        </legend>

        <div className="form-label-input">
          <label htmlFor="cnpj">Type it a CNPJ in field to validate it:</label>
          <input
            id="cnpj"
            type="text"
            name="cnpj"
            placeholder="XX.XXX.XXX/XXXX-XX"
            autoComplete="off"
            maxLength="18"
            onChange={handleChange}
            value={valueCnpj}
          />
        </div>

      </fieldset>
    </div>
  );
}

export default App;
