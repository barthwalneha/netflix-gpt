export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(
    password
  );

  if (!isEmailValid) return "Email address is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
