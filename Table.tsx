import React from "react";
import { Table, THead, TBody, TR, TH, TD } from "@react-email/components";

const ReactTable = ({ data }) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Email</TH>
          <TH>Phone</TH>
        </TR>
      </THead>
      <TBody>
        {data.map((item, index) => (
          <TR key={index}>
            <TD>{item.name}</TD>
            <TD>{item.email}</TD>
            <TD>{item.phone}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export default ReactTable;
