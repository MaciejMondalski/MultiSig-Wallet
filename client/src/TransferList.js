import styled from "styled-components";

import React from "react";

const TransferList = ({ transfers, approveTransfer }) => {
  return (
    <Box>
      <Table>
        <h2>Transfers</h2>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals}
                <button onClick={() => approveTransfer(transfer.id)}>Approve</button>
              </td>
              <td>{!transfer.sent ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Table = styled.div`
  table {
    display: grid;
    border-collapse: collapse;
    min-width: 70%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  button {
    margin: 0 0.4rem;
  }

  h2 {
    font-family: "Roboto", sans-serif;
  }

  th,
  td {
    padding: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    background: #6c7ae0;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
  }

  tr:nth-child(even) td {
    background: #f8f6ff;
  }
`;

export default TransferList;
