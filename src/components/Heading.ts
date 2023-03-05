import PropTypes from 'prop-types';

import styles from 'styles/Heading.module.css';

const validHeadingLevels = ['1', '2', '3', '4', '5', '6'];

function Heading({ children, level, className }) {
  const Component = validHeadingLevels.includes(level) ? 'h' + level : 'h2';

  return (
    <Component className={`${className} ${styles.heading}`}>
      {children}
    </Component>
  );
}

Heading.defaultProps = {
  level: '2',
  className: '',
};

Heading.propTypes = {
  // children: PropTypes.string,
  level: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
