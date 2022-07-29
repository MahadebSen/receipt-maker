import React, { useEffect, useState } from "react";
import EachRow from "./EachRow";

const Table = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/receipts")
      .then((res) => res.json())
      .then((data) => setReceipts(data));
  }, []);

  return (
    <div className="flex justify-center mb-10">
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 px-12 py-2">Date</th>
            <th className="border border-slate-600 px-8 py-2">Payment Mode</th>
            <th className="border border-slate-600 px-20 py-2">Remark</th>
            <th className="border border-slate-600 px-12 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((item) => (
            <EachRow key={item._id} item={item}></EachRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
