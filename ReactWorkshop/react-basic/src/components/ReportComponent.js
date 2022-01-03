import { useContext } from "react";
import DataContexAPI from "../data/DataContextAPI";
import "./ReportComponent.css";
const ReportComponent = () => {
  // call data from DataContexAPI
  //1. single data
  // const data = useContext(DataContexAPI);
  //2. multi data
  const { income, expense } = useContext(DataContexAPI);
  return (
    <div>
      {/* 1. ເອີ້ນໃຊ້ດ້ວຍ Consumer*/}
      {/* <DataContexAPI.Consumer>
        {(context) => (
          <p>
            ລາຍຮັບ: {context.income} ລາຍຈ່າຍ: {context.expense}
          </p>
        )}
      </DataContexAPI.Consumer> */}
      {/* ເອີ້ນໃຊ້ດ້ວຍ useContext */}
      {/* <p>ລາຍຮັບ: {income}</p>
      <p>ລາຍຈ່າຍ: {expense}</p> */}

      <h4>ຍອດຄົງເຫຼື່ອ (ກີບ)</h4>
      <h1>{income - expense}</h1>
      <div className="report-container">
        <div>
          <h4>ຍອດລາຍຮັບ</h4>
          <p className="report plus">{income}</p>
        </div>
        <div>
          <h4>ຍອດລາຍຈ່າຍ</h4>
          <p className="report minus">{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
