import TopMenu from '../../components/topmenu/TopMenu';
import Nav from '../../components/navbar/Nav';
import NavItem from '../../components/navbar/NavItem';
import DropDown from '../../components/navbar/DropDown';
import DropDownItem from '../../components/navbar/DropDownItem';

// styles
import styles from '../../styles/layout/Header.module.scss';

import { AiOutlineHome } from 'react-icons/ai';
import { RiArticleLine } from 'react-icons/ri';
import { SiMusicbrainz, SiHandshake } from 'react-icons/si';
import {
  MdOutlineHistoryEdu,
  MdOutlineAnnouncement,
  MdOutlineGroups,
} from 'react-icons/md';
import { GiPeaceDove, GiFist, GiPlantRoots } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';
import { FiMusic } from 'react-icons/fi';
import { FaRecordVinyl } from 'react-icons/fa';

export default function Header() {
  return (
    <div className={styles.header}>
      <TopMenu />
      <Nav>
        <NavItem title='home' icon={<AiOutlineHome />} url='/' />
        <NavItem
          title='about'
          icon={<MdOutlineAnnouncement />}
          url='/about'
        ></NavItem>

        <NavItem title='history' icon={<MdOutlineHistoryEdu url='' />}>
          <DropDown>
            <DropDownItem
              title='History Of Locking'
              icon={<SiMusicbrainz />}
              url='/history'
            />
            <DropDownItem
              title='Memorial Page'
              icon={<GiPeaceDove />}
              url='/memorial'
            />
            <DropDownItem
              title='Groups & Dancers'
              icon={<MdOutlineGroups />}
              url='/groups'
            />
            <DropDownItem
              title='Soul Train'
              icon={<WiTrain />}
              url='/soultrain'
            />
            <DropDownItem
              title='Wattsstaxx'
              icon={<FiMusic />}
              url='/wattsstaxx'
            />
          </DropDown>
        </NavItem>
        <NavItem title='knowledge' icon={<SiMusicbrainz url='' />}>
          <DropDown>
            <DropDownItem
              title='O.G Pioneers'
              icon={<MdOutlineGroups />}
              url='/pioneers'
            />
            <DropDownItem
              style={{ PointerEvents: 'none' }}
              title='Timeline of Locking'
              icon={<GiPlantRoots />}
              url='/timeline'
            />
            <DropDownItem
              title='Steps & Moves'
              icon={<SiHandshake />}
              url='/steps'
            />
            <DropDownItem
              title='Street terminology'
              icon={<GiFist />}
              url='/terminology'
            />
            <DropDownItem
              title='Social Party'
              icon={<FaRecordVinyl />}
              url='/socialparty'
            />
            <DropDownItem
              title='The Gogo Brothers'
              icon={<MdOutlineGroups />}
              url='/gogobrothers'
            />
          </DropDown>
        </NavItem>
        <NavItem title='editorials' icon={<RiArticleLine />} url='/blog' />
      </Nav>
    </div>
  );
}
