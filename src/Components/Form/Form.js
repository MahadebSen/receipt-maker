import React from "react";
import receipt from "../../Images/receipt-bill.jpg";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const mode = e.target.paymentMode.value;
    const remark = e.target.remark.value;

    const receipt = {
      date,
      amount,
      mode,
      remark,
    };
    console.log(receipt);
    fetch("https://young-island-26384.herokuapp.com/addreceipt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(receipt),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          window.location.reload();
        }
      });
    
  };

  const handleCancel = (e) => {
    e.preventDefault();
    e.target.date.value = "";
    e.target.amount.value = "";
    e.target.paymentMode.value = "cash";
    e.target.remark.value = "";
  };
  return (
    <section className="my-9 mx-5">
      <h1 className="text-center text-4xl mb-9">Receipt Details</h1>
      <div className="mx-auto bg-[#fafafa] border-4 border-[#305a72] rounded-lg grid grid-cols-3 max-w-5xl ">
        <div className="m-auto hidden md:block">
          <img className="" src={receipt} alt="" />
        </div>
        <div className="col-span-2 m-5 flex items-center">
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <div className="">
              <p className=" font-semibold text-lg mb-2">
                Date<span className=" text-[#fd3f3f] text-xl">*</span>:
              </p>
              <input
                className="w-[20em] border-2 border-[#b0cfe0] outline-none px-2 py-1"
                type="text"
                name="date"
                placeholder="DD/MM/YYYY"
                required
              />
            </div>

            <div>
              <p className=" font-semibold text-lg mb-2">
                Amount<span className=" text-[#fd3f3f] text-xl">*</span>:
              </p>
              <input
                className="w-[25em] border-2 border-[#b0cfe0] outline-none px-2 py-1"
                type="number"
                name="amount"
                placeholder="Enter Amount (in INR)"
                required
              />
            </div>

            <div>
              <p className=" font-semibold text-lg mb-2">
                Payment Mode<span className=" text-[#fd3f3f] text-xl">*</span>:
              </p>
              <select
                className="w-[20em] border-2 border-[#b0cfe0] outline-none px-2 py-1"
                name="paymentMode"
                defaultValue="cash"
              >
                <option value="upi">UPI</option>
                <option value="cash">Cash</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
              </select>
            </div>

            <div>
              <p className=" font-semibold text-lg mb-2">Remark:</p>
              <input
                className="w-[25em] border-2 border-[#b0cfe0] outline-none px-2 py-1"
                placeholder="Enter remark"
                name="remark"
                type="text"
              />
            </div>

            <div className="flex gap-5">
              <button
                onClick={handleCancel}
                className="px-5 py-3 rounded-md bg-red-500 text-white font-semibold border-2 border-white hover:border-red-500 hover:text-red-500 hover:bg-white"
              >
                CANCEL
              </button>
              <button className="px-5 py-3 rounded-md bg-emerald-500 text-white font-semibold border-2 border-white hover:border-emerald-500 hover:text-emerald-500 hover:bg-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
