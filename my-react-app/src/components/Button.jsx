import React from "react";
import PropTypes from "prop-types";

/**
 * Універсальна кнопка.
 * Props:
 *  - text: текст на кнопці
 *  - type: "button" | "submit" | "reset" (за замовчуванням "button")
 *  - onClick: обробник кліку (необов'язково, але очікується для "button")
 */
const Button = ({ text, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

export default Button;