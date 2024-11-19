const dhbw = {
  location: "HDH",
  students: 200,
};

function changeProperty(param) {
  param.obj[param.property] = param.value;
  return param.obj;
}

console.log(
  changeProperty({ obj: dhbw, property: "location", value: "Mannheim" })
);
