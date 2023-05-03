import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const getLeftNavbar = () => (
        <div className="menu-container">
          <h1 className="menu-heading">Left Navbar Menu</h1>
          <ul className="list-container">
            <li className="list-item">Item 1</li>
            <li className="list-item">Item 2</li>
            <li className="list-item">Item 3</li>
            <li className="list-item">Item 4</li>
          </ul>
        </div>
      )

      const getContent = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const getRightNavbar = () => (
        <div className="menu-container">
          <h1 className="menu-heading">Right Navbar</h1>
          <div className="ad-container">
            <p className="ad-text">Ad 1</p>
          </div>
          <div className="ad-container">
            <p className="ad-text">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? getLeftNavbar() : null}
          {showContent ? getContent() : null}
          {showRightNavbar ? getRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
