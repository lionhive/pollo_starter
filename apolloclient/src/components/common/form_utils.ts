export const validate = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.password && values.password.length < 3) {
    errors.password = "Password must be 3 charaters long.";
  }
  return errors;
};

function containsSpecialCharacter(str: string) {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

export const warn = (values: any) => {
  interface IWarnings {
    password?: string;
  }
  const warnings: IWarnings = {};
  if (values.password && !containsSpecialCharacter(values.password)) {
    warnings.password = "Password should contain a number or special character.";
  }
  if (values.password && values.password.length < 8) {
    warnings.password = "Password must be 8 charaters long.";
  }
  return warnings;
};

export const normalizePhone = (value: string, previousValue: string) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + "-";
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3) + "-";
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3);
  }
  return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, 6) + "-" + onlyNums.slice(6, 10);
};
