import React from "react";

const Table = ({ buyerData }) => {
  return (
    <div>
      <table border="2" align="center">
        <tr>
          <th>Invoice_Id</th>
          <th>Reference</th>
          <th>Maturity_Date</th>
          <th>Invoice_Amount</th>
          <th>Ccy</th>
          <th>Buyer</th>
          <th>Supplier</th>
          <th>Invoice_Date</th>
        </tr>

        {buyerData.map((data, id) => (
          <tr key={id}>
            <td>{data.Invoice_Id}</td>
            <td>{data.Reference}</td>
            <td>{data.Maturity_Date}</td>
            <td>{data.Invoice_Amount}</td>
            <td>{data.Ccy}</td>
            <td>{data.Buyer}</td>
            <td>{data.Supplier}</td>
            <td>{data.Invoice_Date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
