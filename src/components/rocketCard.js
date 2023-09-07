/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const RocketCard = ({ props }) => {
  const {
    id, name, image, description,
  } = props;

  return (
    <div key={id}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketCard;
