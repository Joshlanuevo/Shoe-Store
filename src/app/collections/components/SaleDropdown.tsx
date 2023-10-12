const SalesDropdown = () => {
    return ( 
        <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <details open>
            <summary>Sale</summary>
            <ul>
              <li><a>On Sale</a></li>
            </ul>
          </details>
        </li>
      </ul>
     );
}
 
export default SalesDropdown;