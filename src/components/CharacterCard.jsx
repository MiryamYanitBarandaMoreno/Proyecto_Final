import PropTypes from 'prop-types';

const CharacterCard = ({ characters }) => {
    const cardStyle = { width: "18rem" };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <img src={characters.imageUrl} className="card-img-top" alt={`${characters.fullName}`} />
                <h5 className="card-title">{characters.fullName}</h5>
                <p className="card-text">
                    <strong>Title:</strong> {characters.title}
                </p>
                <p className="card-text">
                    <strong>Family:</strong> {characters.family}
                </p>
            </div>
        </div>
    );
};

CharacterCard.propTypes = {
    characters: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default CharacterCard;
