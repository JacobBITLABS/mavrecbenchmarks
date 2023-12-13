import React from 'react'

import PropTypes from 'prop-types'

import './highlight.css'

const Highlight = (props) => {
  return (
    <div className="highlight-highlight">
      <span className="highlight-text">{props.Title}</span>
      <span className="highlight-text1">{props.Description}</span>
    </div>
  )
}

Highlight.defaultProps = {
  Description: 'Covering rural and urban pastures from European geographies.',
  Title: 'European Pasture',
}

Highlight.propTypes = {
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Highlight
