export const validateHelper = (input, validateHandler) => {
  switch (input.name) {
    case "user":
      if (!input.value) {
        console.log(input.value);
        validateHandler((prevState) => {
          return { ...prevState, user: "Incorrect" };
        });
      } else {
        validateHandler((prevState) => {
          return { ...prevState, user: "Correct" };
        });
      }; break;
      case "password":
      if (input.value === "") {
        console.log(input.value);
        validateHandler((prevState) => {
          return { ...prevState, password: "Incorrect" };
        });
      } else {
        validateHandler((prevState) => {
          return { ...prevState, password: "Correct" };
        });
      }; break;
  }
};
