import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./form.css";

const FormComponent = () => {
  const dispatch = useDispatch();
  // ປະກາດຕົວແປເພຶອເກັບຄ່າໃນ form
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputDes = (event) => {
    setDes(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      title: title,
      des: des,
    };
    console.log(itemData);
    dispatch({
      type: "INSERT",
      payload: itemData,
    });
    setTitle("");
    setDes("");
  };
  return (
    <div className="form-container">
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
            type="text"
            placeholder="(+ລາຍຮັບ -ລາຍຈ່າຍ)"
            onChange={inputDes}
            value={des}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn">
            ບັນທຶກ
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
