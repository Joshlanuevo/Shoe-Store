import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BsFilterLeft } from 'react-icons/bs'

import BrandDropdown from '@/app/collections/components/BrandDropdown';
import ColorsDropdown from '@/app/collections/components/ColorsDropdown';
import SizesDropdown from '@/app/collections/components/SizesDropdown';
import SalesDropdown from '@/app/collections/components/SaleDropdown';
import PriceDropdown from '@/app/collections/components/PriceDropdown';

interface SideDrawerProps {
  setCurrentLayout: React.Dispatch<React.SetStateAction<"grid-layout" | "flex-layout">>;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ setCurrentLayout }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile && (
        <div>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button flex items-center p-4">
              Filter 
              <span style={{ marginLeft: '6px' }}><BsFilterLeft /></span>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div>
                <BrandDropdown />
              </div>
              <div>
                <SizesDropdown />
              </div>
              <div>
                <SalesDropdown />
              </div>
              <div>
                <ColorsDropdown />
              </div>
              <div>
                <PriceDropdown />
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideDrawer;