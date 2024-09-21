import PropTypes from 'prop-types';

function List(props) {


    const category = props.category; 
    const itemsList = props.items;

    itemsList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemsList.map(
        (item) => 
        <li key={item.id}>
            {item.name} &nbsp; <b>{item.calories}</b>
        </li>
    );

    return (
        <>
        <h1 className="category-title">{category}</h1>
        <ol className="list">{listItems}</ol>
        </>
    )

}

List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
}

List.defaultProps = {
    category: 'Unknown',
    items: []
}

export default List;
