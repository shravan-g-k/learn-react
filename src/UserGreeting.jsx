import PropTypes from 'prop-types';

function UserGreeting(props) {
    const userGreeting = <p className="user-greeting">Welcome back! {props.name}</p>
    const signup = <p className="signup">Please sign up.</p>
    if (props.isLoggedIn) {
        return userGreeting
    }

    return signup

}

UserGreeting.proptypes = {
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defaultProps = {
    name: "Unknown",
    isLoggedIn: false
}

export default UserGreeting