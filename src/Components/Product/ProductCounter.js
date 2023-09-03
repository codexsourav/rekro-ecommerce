"use client"
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from './styles/counter.module.css';
import { useState } from "react";
function ProductCounter() {
  const [count, setcount] = useState(1);
  const max = 10;
  const setcountrproduct = (e) => {
    if (e != true) {
      if (count > 1) {
        setcount((prev) => prev - 1);
      }
      return false;
    } else if (count < max) {

      setcount((prev) => prev + 1);
    }
  }

  return (
    <div className={styles.countbox}>
      <div className={styles.counticon} onClick={() => setcountrproduct(true)}>
        <FiPlus />
      </div>
      <span className={styles.count}>{count}</span>
      <div className={styles.counticon} onClick={() => setcountrproduct(false)}>
        <FiMinus />
      </div>
    </div>
  )
}
export default ProductCounter