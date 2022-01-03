import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FromComponent";
import { useState, useEffect } from "react";
import DataContexAPI from "./data/DataContextAPI";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const Description = () => <p>ບັນທຶກຂໍ້ມູນບັນຊິໃນແຕ່ລະວັນ</p>;
const design = { color: "red", textAlign: "center" };
function App() {
  const initData = [
    { id: 1, title: "salary", amount: 1000000 },
    { id: 2, title: "buy", amount: -500000 },
    { id: 3, title: "buy car", amount: -100000 },
    { id: 4, title: "Bonus", amount: 500000 },
  ];
  const [items, setItems] = useState(initData);
  // function ເພື່ອຄ່າທີ່ສົ່ງມາຈາກ FormComponent
  const onAddNewItem = (newItem) => {
    console.log(newItem);
    // initData.push(newItem);
    setItems((prevItem) => {
      // ເອົາຂໍ້ມູນມາຕໍ່ໃສ່ທາງໜ້າ
      return [newItem, ...prevItem];
    });
  };

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpence, setReportExpence] = useState(0);

  // total
  useEffect(() => {
    const amounts = items.map((e) => {
      return e.amount;
    });
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpence(expense);
  }, [items, reportIncome, reportExpence]);

  return (
    // set data to DataContexAPI
    <DataContexAPI.Provider
      value={{
        income: reportIncome,
        expense: reportExpence,
      }}
    >
      <div className="container">
        <h1 style={design}>ໂປຣແກຣມບັນຊີລາຍຮັບ-ລາຍຈ່າຍ</h1>
        {/* ກຳນົດ rounter */}
        <Router>
          <div>
            <ul className="horizintal-menu">
              <li>
                {/* <a href="#">ຂໍ້ມູນບັນຊີ</a> */}
                <Link to="/">ຂໍ້ມູນບັນຊີ</Link>
              </li>
              <li>
                <Link to="/insert">ບັນທຶກຊໍ້ມູນ</Link>
              </li>
            </ul>
            {/* ກຳນົດ rounter viewer */}
            <Routes>
              <Route path="/" exact element={<ReportComponent />} />
              <Route
                path="/insert"
                element={<FormComponent onAddItem={onAddNewItem} />}
              />
              {/* <FormComponent onAddItem={onAddNewItem} />
                <Transaction items={items} /> */}
            </Routes>
          </div>
        </Router>
        <Transaction items={items} />
      </div>
    </DataContexAPI.Provider>
  );
}

export default App;
