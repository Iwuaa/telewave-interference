import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './games.css'

const GamesMenu = (props) => {
  return (
    <div className="component-container">
      <button type="button" className="button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="component-text4">Telewave</span>
            </Fragment>
          )}
        </span>
      </button>
      <button type="button" className="button">
        <span>
          {props.button4 ?? (
            <Fragment>
              <span className="component-text6">Telewave Interference</span>
            </Fragment>
          )}
        </span>
      </button>
      <button type="button" className="button">
        <span>
          {props.button3 ?? (
            <Fragment>
              <span className="component-text5">Button</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

GamesMenu.defaultProps = {
  button: undefined,
  button3: undefined,
  button4: undefined,
}

GamesMenu.propTypes = {
  button: PropTypes.element,
  button3: PropTypes.element,
  button4: PropTypes.element,
}

export default GamesMenu
