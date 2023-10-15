import React, { ReactNode, FC, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

interface SideDrawerProps {
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  show: boolean;
}

const SideDrawer: FC<SideDrawerProps> = (props) => {
  const content = (
    <CSSTransition
    in={props.show}
    timeout={200}
    classNames="slide-in-left"
    mountOnEnter
    unmountOnExit
  >
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
  </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook")!);
};

export default SideDrawer;
