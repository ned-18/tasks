const btnBorder = document.getElementById('btnborder');
const btn = document.querySelector('a');

const chnageDirectionBtnRotaionHandler = () => {
	btnBorder.classList.toggle('counter-clockwise');
};

btn.addEventListener('click', chnageDirectionBtnRotaionHandler);
