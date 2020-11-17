const btnBorder = document.getElementById('btnborder');
const btn = document.querySelector('a');

const changeDirectionBtnRotaionHandler = () => {
	btnBorder.classList.toggle('counter-clockwise');
};

btn.addEventListener('click', changeDirectionBtnRotaionHandler);
