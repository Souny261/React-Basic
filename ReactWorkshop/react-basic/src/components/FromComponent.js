import "./FormComponent.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FormComponent = (props) => {
  // How to create state
  const [title, setTitle] = useState(""); //title ແມ່ນຕົວແປ & setTitle ແມ່ນfunction
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);
  // function
  const inputTitle = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };
  // ຈະເອີ້ນໃຊ້ເມື່ອມີການ runder ใหม่
  useEffect(() => {
    // check validate data to disble button
    const checkData = title.trim().length > 0 && amount !== 0;
    setFormValid(checkData);
  }, [amount, title]); //ຈະເອີ້ໃຊ້ເມື່ອໃຊ້ງານ state ຂອງ amount

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ຊື່ລາຍການ</label>
          <input
            type="text"
            placeholder="ປ້ອນຊື່ລາຍການ"
            onChange={inputTitle}
            value={title}
          ></input>
        </div>
        <div className="form-control">
          <label>ຈຳນວນເງີນ</label>
          <input
            type="number"
            placeholder="(+ລາຍຮັບ -ລາຍຈ່າຍ)"
            onChange={inputAmount}
            value={amount}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            ບັນທຶກ
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
