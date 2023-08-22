import React from "react";
import { Table, TBody, TR, TD } from "@react-email/components";

const ReactTable = ({ data }) => {
  return (
    <Table>
      <TBody>
        {data.map((row, index) => (
          <TR key={index}>
            {row.map((cell, cellIndex) => (
              <TD key={cellIndex}>{cell}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export default ReactTable;
