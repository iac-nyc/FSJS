// Type inside this function
function isValidHex(text) {
	const hexRegEx = /^#[a-f0-9]{6}$/i;
  return hexRegEx.test(text);
}

const hex = document.getElementById("hex");
const body = document.getElementsByTagName("body")[0];

hex.addEventListener("input", e => {
  const text = e.target.value;
  const valid = isValidHex(text);
  if (valid) {
    body.style.backgroundColor = "rgb(176, 208, 168)";
  } else {
    body.style.backgroundColor = "rgb(189, 86, 86)";
  }
});