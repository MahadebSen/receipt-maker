import React from "react";

const Form = () => {
  return (
    <section className="my-9 mx-5">
      <form className=" bg-[rgb(204,252,255)]">
        <h1 className="text-center text-3xl font-bold">Receipt Details</h1>
        <div>
          <p>Date</p>
          <input type="date" />
        </div>

        <div>
          <p>Amount</p>
          <input type="number" />
        </div>

        <div>
          <p>Payment Mode</p>
          <select name="paymentMode" id="">
            <option value="upi">UPI</option>
            <option value="cash" selected>
              Cash
            </option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
          </select>
        </div>

        <div>
          <p>Remark</p>
          <input type="text" />
        </div>

        <div>
          <button>CANCEL</button>
          <button>SUBMIT</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
