import React from 'react'
import './index.css'

const StickyMenu = () => (
  <div className="sticky-menu">
    <ul className="menu-list">
      <div className="menu-header">
        <ul className="header-list">
          <li className="header-item">
            <p className="header-link">
              <span className="header-text">Hello, Sri Mandir Bhakt</span>
            </p>
          </li>
          <li className="header-item">
            <p className="welcome-link">Welcome to Sri Mandir Puja Seva</p>
          </li>
        </ul>
        <hr />
      </div>
      <div className="menu-body">
        <div className="account-details">
          <span className="account-details-title">Account Details</span>
          <button className="menu-button" type="button">
            <div className="menu-button-content">
              <img
                alt="nav_item"
                src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
              />
              <span className="menu-button-text">My profile</span>
            </div>
            <div className="menu-button-icon">
              <img alt="nav_item" src="path/to/ic_chevron_right_black.svg" />
            </div>
          </button>
          <button className="menu-button" type="button">
            <div className="menu-button-content">
              <img alt="nav_item" src="path/to/ic_puja_history.svg" />
              <span className="menu-button-text">My Puja Bookings</span>
            </div>
            <div className="menu-button-icon">
              <img alt="nav_item" src="path/to/ic_chevron_right_black.svg" />
            </div>
          </button>
          <button className="menu-button" type="button">
            <div className="menu-button-content">
              <img alt="nav_item" src="path/to/ic_puja_history.svg" />
              <span className="menu-button-text">My Ramotsav Bookings</span>
            </div>
            <div className="menu-button-icon">
              <img alt="nav_item" src="path/to/ic_chevron_right_black.svg" />
            </div>
          </button>
          <a className="menu-button" href="#">
            <div className="menu-button-content">
              <img alt="nav_item" src="path/to/ic_explore_puja_seva.svg" />
              <span className="menu-button-text">Book a Puja</span>
            </div>
            <div className="menu-button-icon">
              <button type="button" className="new-badge">
                New
              </button>
              <img alt="right arrow" src="path/to/ic_chevron_right_black.svg" />
            </div>
          </a>
        </div>
      </div>
      <div className="menu-support">
        <span className="support-title">Help & Support for Puja Booking</span>
        <div className="support-details">
          <button type="button" className="support-button">
            <div className="support-content">
              <img alt="nav_item" src="path/to/ic_action_help_call.svg" />
              <div className="support-text">
                <a href="tel:08071174417" className="support-phone">
                  080-711-74417
                </a>
                <span className="support-hours">
                  You can call us from 10:30 AM - 7:30 PM
                </span>
              </div>
            </div>
          </button>
          <div className="support-options">
            <button type="button" className="support-button">
              <div className="support-content">
                <img alt="nav_item" src="path/to/ic_action_help_mail.svg" />
                <span className="support-email">Email us</span>
              </div>
            </button>
            <button type="button" className="support-button">
              <a href="#" target="_blank" className="support-whatsapp">
                <img
                  alt="nav_item"
                  src="path/to/ic_action_help_whats_app.svg"
                />
                <span className="support-whatsapp-text">Whatsapp us</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </ul>
  </div>
)

export default StickyMenu
