import { useState } from "react";
const forms = {
  username: { dirty: false, message: "", error: "" },
  password: { dirty: false, message: "", error: "" },
};
const onBlurTouch = (e) => {
  forms.map((x) => {
    const field = e.target.name;
    if (x[field] === field) {
      return (x = { ...x, dirty: true });
    }
    return x;
  });
};



export const useValidateHook = (validForm) => {
  const [errors, setErrors] = useState(validForm);

  const inputValidatehandler = (input) => {
    console.log("Start");

    switch (input.name) {
      case "username":
        if (!input.value) {
          setErrors((prevState) => {
            return {
              ...prevState,
              [input.name]: {
                ...[input.name],
                message: "Username is required!",
                isValid: false,
              },
            };
          });
         } else if (input.value.length < 5) {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Username is too short!",
                  isValid: false,
                },
              };
            });} else {
          setErrors((prevState) => {

            return {
              ...prevState,
              [input.name]: {
                ...[input.name],
                message: "Correct",
                isValid: true,
              },
            };
          });
        }
        break;
      case "password" :
        if (!input.value) {
          setErrors((prevState) => {
            return {
              ...prevState,
              [input.name]: {
                ...[input.name],
                message: "Password is required!",
                isValid: false,
              },
            };
          });
        } else if (input.value.length < 5) {
          setErrors((prevState) => {
            return {
              ...prevState,
              [input.name]: {
                ...[input.name],
                message: "Password is too short!",
                isValid: false,
              },
            };
          });
        } else {
          setErrors((prevState) => {
            return {
              ...prevState,
              [input.name]: {
                ...[input.name],
                message: "Correct",
                isValid: true,
              },
            };
          });
        }
        break;
        case "email":
          if (!input.value) {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Password is required!",
                  isValid: false,
                },
              };
            });
          } else if (input.value.length < 5) {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Password is too short!",
                  isValid: false,
                },
              };
            });
          } else {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Correct",
                  isValid: true,
                },
              };
            });
          }
          break;
          case "rePassword":
          if (!input.value) {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Password is required!",
                  isValid: false,
                },
              };
            });
          } else if (input.value.length < 5) {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Password is too short!",
                  isValid: false,
                },
              };
            });
          } else {
            setErrors((prevState) => {
              return {
                ...prevState,
                [input.name]: {
                  ...[input.name],
                  message: "Correct",
                  isValid: true,
                },
              };
            });
          }
          break;
    }
  };
  return [errors, inputValidatehandler];
};
