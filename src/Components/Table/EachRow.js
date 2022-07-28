import React from "react";

const EachRow = ({ item }) => {
  const { date, amount, mode, remark } = item;
  return (
    <tr>
      <td className="text-center border border-slate-700 py-2">{date}</td>
      <td className="text-center border border-slate-700 py-2">{mode}</td>
      <td className="text-center border border-slate-700 py-2">
        {remark ? remark : "NA"}
      </td>
      <td className="text-center border border-slate-700 py-2">{amount}</td>
    </tr>
  );
};

export default EachRow;
