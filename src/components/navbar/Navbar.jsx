import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';
import BallotIcon from '@mui/icons-material/Ballot';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="items">
            <div className="item">
              <TranslateIcon className="icon" />
              English
            </div>
            <div className="item">
              <NightsStayIcon className="icon" />
            </div>
            <div className="item">
              <FullscreenIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsActiveIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ForumIcon className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <BallotIcon className="icon" />
            </div>
            <div className="item">
              <img src="https://commons.wikimedia.org/wiki/File:Avatar_poe84it.png" alt="avatar" className="avatar" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar