import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const changeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              value={showContent}
              onChange={changeShowContent}
              checked={showContent}
            />
            <label htmlFor="content" className="input-label">
              Content
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavbar"
              value={showLeftNavbar}
              onChange={changeShowLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="input-label">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              value={showRightNavbar}
              onChange={changeShowRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="input-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
