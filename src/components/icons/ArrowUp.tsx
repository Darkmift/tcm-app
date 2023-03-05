import PropTypes from 'prop-types'

// import {svg} from 'styles/Arrow.module.css'
type Props = {
  className?: string
  width: number
  height: number
  color?: string
}
function Arrow({className, width, height, color}: Props) {
  return (
    <svg
      className={`${className} ${'svg'}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 15L12 7L4 15"
        stroke={color}
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
