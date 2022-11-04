const validateEmail = (email) => {
  const re = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  return String(email)
    .toLowerCase()
    .match(re);
};

module.exports = validateEmail;