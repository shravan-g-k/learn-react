import PropTypes from 'prop-types'
function Student(props) {
    return <div className="student">
        <p>Name: {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Roll: {props.roll}</p>
        <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    roll: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    roll: 0,
    isStudent: false
}
export default Student