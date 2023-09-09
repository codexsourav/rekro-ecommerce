"use client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import Rating from "react-rating";

function Rattingstars({ iconsize = 20, rating = 4, readonly = true, onchange }) {
  return (
    <Rating initialRating={rating} fullSymbol={<AiFillStar size={iconsize} />} emptySymbol={<AiOutlineStar size={iconsize} />} readonly={readonly} onChange={onchange} />

  )
}
export default Rattingstars;