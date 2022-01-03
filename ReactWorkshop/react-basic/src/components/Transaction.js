import Item from "./Item";
import "./Transaction.css";
// import DataContexAPI from "../data/DataContextAPI";
// import { useContext } from "react";
const Transaction = (props) => {
  const { items } = props;
  // 1. ເອີ້ນໃຊ້ຂໍ້ມູນໃນ DataContexAPI
  // const name = useContext(DataContexAPI);
  return (
    <div>
      <ul className="item-list">
        {items.map((e) => {
          // return <Item title={e.title} amount={e.amount} />;
          return <Item {...e} key={e.id} />;
        })}
      </ul>
      <hr></hr>
      {/* 2. ເອີ້ນໃຊ້ຂໍ້ມູນໃນ DataContexAPI */}
      {/* <DataContexAPI.Consumer>
        {(value) => <p>{value}</p>}
      </DataContexAPI.Consumer> */}

      {/* {name} */}
    </div>
  );
};

export default Transaction;
