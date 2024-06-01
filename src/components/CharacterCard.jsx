import PropTypes from 'prop-types';
import '../assets/css/CharacterCard.css'; 

const CharacterCard = ({ character }) => {
    return (
        <div className="card character-card">
            <div className="card-body">
                <img src={character.imageUrl} className="card-img-top" alt={`${character.fullName}`} />
                <h5 className="card-title">{character.fullName}</h5>
                <p className="card-text">
                    <strong>Title:</strong> {character.title}
                </p>
                <p className="card-text">
                    <strong>Family:</strong> {character.family}
                </p>
            </div>
        </div>
    );
};

CharacterCard.propTypes = {
    character: PropTypes.shape({
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
