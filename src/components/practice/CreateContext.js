import React, { createContext, useState } from 'react';
const PayloadContext = createContext();
const CreateContext = () => {
  const [payload, setPayload] = useState(null);
  //function to update payload
  const updatePayload = (parameter) => {
    setPayload(parameter);
    console.log(parameter, 'parameter===');
  };
  console.log(payload, 'payload==');

  return (
    <div>
      <PayloadContext.Provider value={{ payload, updatePayload }}>
        <div>
          <p>Payload: {payload}</p>
          <button onClick={() => updatePayload('parameter passing')}>Update Payload</button>
        </div>
      </PayloadContext.Provider>
    </div>
  );
};
export default CreateContext;
