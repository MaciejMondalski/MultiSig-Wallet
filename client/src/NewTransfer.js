import styled from "styled-components";

import React, { useState } from "react";

const NewTransfer = ({ createTransfer }) => {
  const [transfer, setTransfer] = useState(undefined);

  const submit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  return (
    <TransferBox>
      <h2>Create transfer</h2>
      <form onSubmit={(e) => submit(e)}>
        <div className="textbox">
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="text" onChange={(e) => updateTransfer(e, "amount")} />
        </div>
        <div className="textbox">
          <label htmlFor="to">To</label>
          <input id="to" type="text" onChange={(e) => updateTransfer(e, "to")} />
        </div>
        <button>Submit</button>
      </form>
    </TransferBox>
  );
};

const TransferBox = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  width: 100%;

  form {
    display: flex;
    justify-content: space-between;
    width: 28%;
  }

  label {
    padding: 0 0.5rem;
  }
`;

export default NewTransfer;
