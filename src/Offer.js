import React from 'react';

class Offer extends React.Component {
  render() {
    const { details, index } = this.props;
    return (
      <li className="list-offer">
        <img src={details.image} alt={details.name} />
        <h3 className="offer-name">
          {details.name}
        </h3>
        <p className="offer-desc">{details.company.catchPhrase}</p>
      </li>
    )
  }
}

export default Offer;
