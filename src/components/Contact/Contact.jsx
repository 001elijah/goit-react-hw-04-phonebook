import PropTypes from "prop-types";

const Contact = ({ contactProp, removeContact }) => {
    // console.log(contactProp);
    return (
        <li>
            <span>{contactProp.name}: </span><span>{contactProp.number} </span>
            <button type="button" onClick={() => removeContact(contactProp.id)}>Delete</button>
        </li>
    );
};

Contact.propTypes = {
    contactProp: PropTypes.object.isRequired
};

export default Contact;