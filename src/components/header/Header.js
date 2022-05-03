import { useState } from 'react';
import TopMenu from '../topmenu/TopMenu';
import { AiFillCaretRight, AiFillMail, AiFillCaretDown } from 'react-icons/ai';
import styles from '../../styles/components/Header.module.scss';
import Nav from '../navbar/Nav';
import NavItem from '../navbar/NavItem';
import DropDown from '../navbar/DropDown';
import DropDownItem from '../navbar/DropDownItem';

export default function Header() {
  return (
    <div className={styles.header}>
      <TopMenu />
      <Nav>
        <NavItem title='home' icon={<AiFillCaretRight />} url='/' />
        <NavItem title='about' icon={<AiFillCaretRight />} url='/about' />
        <NavItem title='history' icon={<AiFillCaretRight />} url='/history'>
          <DropDown>
            <DropDownItem
              title='Hall of Fame'
              icon={<AiFillCaretRight />}
              url='/hof'
            />
          </DropDown>
        </NavItem>
        <NavItem title='knowledge' icon={<AiFillCaretRight />} url='/knowledge'>
          <DropDown>
            <DropDownItem
              title='Steps & Moves'
              icon={<AiFillCaretRight />}
              url='/steps'
            />
          </DropDown>
        </NavItem>
        <NavItem title='editorials' icon={<AiFillCaretRight />} url='/blog' />
        <NavItem
          title='contact'
          icon={<AiFillCaretRight />}
          url='/contact'
        />
      </Nav>
    </div>
  );
}
