export const isRequired = (value) => {
  return value !== null && value !== undefined && value.trim() !== '';
};

export const validateLetters = (value) => {
  const lettersRegex = /^[A-Za-z ]+$/;
  return lettersRegex.test(value)
}
 
// Checks if a value is a valid email
export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

// Checks if a value is at least a certain length
export const minLength = (value, length) => {
  return value.length >= length;
};

// Checks if a value is a number
export const isNumber = (value) => {
  return !isNaN(value);
};