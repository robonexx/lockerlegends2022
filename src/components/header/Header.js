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
              title='History Of Locking'
              icon={<AiFillCaretRight />}
              url='/lockinghistory'
            />
            <DropDownItem
              title='Memorial Page'
              icon={<AiFillCaretRight />}
              url='/memorial'
            />
            <DropDownItem
              title='Groups & Dancers'
              icon={<AiFillCaretRight />}
              url='/groups'
            />
            <DropDownItem
              title='Soul Train'
              icon={<AiFillCaretRight />}
              url='/soultrain'
            />
            <DropDownItem
              title='Wattsstaxx'
              icon={<AiFillCaretRight />}
              url='/wattsstaxx'
            />
          </DropDown>
        </NavItem>
        <NavItem title='knowledge' icon={<AiFillCaretRight />} url='/knowledge'>
          <DropDown>
            <DropDownItem
              title='Pioneers'
              icon={<AiFillCaretRight />}
              url='/halloffame'
            />
            <DropDownItem
              title='Timeline of Locking'
              icon={<AiFillCaretRight />}
              url='/timeline'
            />
            <DropDownItem
              title='Steps & Moves'
              icon={<AiFillCaretRight />}
              url='/steps'
            />
            <DropDownItem
              title='Street terminology'
              icon={<AiFillCaretRight />}
              url='/terminology'
            />
            <DropDownItem
              title='Social Party'
              icon={<AiFillCaretRight />}
              url='/socialparty'
            />
          </DropDown>
        </NavItem>
        <NavItem title='editorials' icon={<AiFillCaretRight />} url='/blog' />
        <NavItem title='contact' icon={<AiFillCaretRight />} url='/contact' />
      </Nav>
    </div>
  );
}
