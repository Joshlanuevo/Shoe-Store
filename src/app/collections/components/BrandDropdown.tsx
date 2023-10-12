const BrandDropdown = () => {
    return ( 
    <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <details open>
            <summary>Brand</summary>
            <ul>
              <li><a>Nike Sportswear</a></li>
              <li><a>Jordan</a></li>
            </ul>
          </details>
        </li>
      </ul>
    );
}
 
export default BrandDropdown;