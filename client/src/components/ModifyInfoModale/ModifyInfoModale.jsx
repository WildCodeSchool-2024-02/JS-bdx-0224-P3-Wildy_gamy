import PropTypes from "prop-types";
import "./ModifyInfoModale.scss";
import { Form } from "react-router-dom";
import { useState } from "react";
import inputFields from "../../services/inputFields";

function ModifyInfoModale({
  handleClickModal,
  showModalModify,
  setShowModalModify,
  userInfos,
}) {
  const [formData, setFormData] = useState({
    firstname: userInfos.firstname,
    lastname: userInfos.lastname,
    pseudo: userInfos.pseudo,
    email: userInfos.email,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  


  return (
    <dialog className="dialog" open>
      <Form method="PUT">
        {inputFields.map((field) => (
          <label key={field.name}>
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={field.className}
            />
          </label>
          ))}
        <button type="submit">Modifier mes informations</button>
      </Form>
      <button
        type="button"
        onClick={handleClickModal(showModalModify, setShowModalModify)}
      >
        Annuler
      </button>
    </dialog>
  );
}

ModifyInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalModify: PropTypes.bool.isRequired,
  setShowModalModify: PropTypes.func.isRequired,
  userInfos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModifyInfoModale;