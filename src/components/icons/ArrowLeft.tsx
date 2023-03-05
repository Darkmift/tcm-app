import PropTypes from 'prop-types'

// import { svg } from 'styles/Arrow.module.css';
type Props = {
  className?: string
  width: number
  height: number
  color?: string
}
function Arrow({className, width, height}: Props) {
  return (
    <svg
      className={`${className} ${'svg'}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 20L17 12L9 4"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Arrow.defaultProps = {
  width: 10,
  height: 10,
  className: '',
}

Arrow.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default Arrow
