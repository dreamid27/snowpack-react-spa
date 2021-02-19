const finalENV = {};
let isFilled = false;

if (!isFilled) {
  const listENV = import.meta.env;
  Object.keys(listENV).forEach((key) => {
    finalENV[key.replace("SNOWPACK_PUBLIC_", "")] = listENV[key];
  });
  isFilled = true;
}

export default finalENV;
