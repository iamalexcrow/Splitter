export const checkForNumbers = (value: any, func: any, decimal?: boolean) => {
  let regex;

  if (decimal) {
    regex = new RegExp(/^(\d)*(\.)?([0-9]{1,2})?$/gm);
  } else {
    regex = new RegExp(/^[0-9]*$/);
  }

  if (value.length === 0) {
    func("0");
  }
  if (value.match(regex)) {
    if (Number(value.slice(0, 1)) === 0) {
      func(value.slice(1));
    } else {
      func(value);
    }
  }
};
