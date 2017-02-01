const createFlash = element => ({message}) => {
    element.innerHTML = `<div style="background-color: bisque">${message}</div>`;
    element.style.display = "block";
    setTimeout(() => { element.style.display = "none"; }, 2000);
};

module.exports = createFlash;
