import {Component} from 'react'
import {Link} from 'react-router-dom'

import StickyMenu from '../StickyMenu'
import './index.css'

class Header extends Component {
  state = {
    notesStatus: true,
  }

  onClickProfile = () => {
    const {notesStatus} = this.state
    this.setState(prevState => {
      notesStatus: !prevState.notesStatus
    })
  }

  render() {
    const {notesStatus} = this.state

    return (
      <nav className="header-container">
        <div className="logo-and-title-container">
          <img
            alt="Sri Mandir"
            className="logo-item"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDQp4xCSxsody3pNl_mZhM-hJnijWPpSjmg&s"
          />
          <h1 className="title-item">Sri Mandir</h1>
        </div>
        <ul className="nav-items-list">
          <li className="link-item">
            <Link className="route-links" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-links" to="/puja">
              Puja
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-links" to="/panchang">
              Panchang
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-links" to="/temples">
              Temples
            </Link>
          </li>
          <li className="link-item">
            <Link className="route-links" to="/library">
              Library
              <span>
                <img
                  className="profile-lang-icon"
                  alt="profile-lang-icon"
                  src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                />
              </span>
            </Link>
          </li>
        </ul>
        {notesStatus ? <StickyMenu /> : ''}
        <div className="profile-container">
          <button type="submit" className="profile-lang">
            English
            <span>
              <img
                className="profile-lang-icon"
                alt="profile-lang-icon"
                src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              />
            </span>
          </button>
          <button
            type="button"
            className="profile-icon-container"
            onClick={this.onClickProfile()}
          >
            <img
              alt="profile icon"
              className="profile-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s"
            />
          </button>
        </div>
      </nav>
    )
  }
}

export default Header
