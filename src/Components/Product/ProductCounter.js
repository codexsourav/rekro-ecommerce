"use client"
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from './styles/counter.module.css';
import { useState } from "react";
function ProductCounter({ count, setcountrproduct }) {


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