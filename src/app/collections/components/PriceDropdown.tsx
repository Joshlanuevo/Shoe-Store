const PriceDropdown = () => {
  return ( 
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li>
        <details open>
          <summary>Price</summary>
          <ul>
            <li><a>Under ₱3,000</a></li>
            <li><a>₱3,000 - ₱6,000</a></li>
            <li><a>₱6,001 - ₱11,199</a></li>
            <li><a>Over ₱12,000</a></li>
          </ul>
        </details>
      </li>
    </ul>
   );
}
 
export default PriceDropdown;