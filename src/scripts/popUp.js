const accrodionButtons = document.querySelectorAll(".pop-up__answer_plus");
const questionBlock = document.querySelectorAll(".pop-up__answer_question-top")

accrodionButtons.forEach(item => {
	item.addEventListener("click" , () => {

		if(item.hasAttribute("Data")){
			item.setAttribute("src" , "img/PopUp/plusIcon.svg")
			item.removeAttribute("Data")
		}else {
			item.setAttribute("src" , "img/PopUp/minusIcon.svg")
			item.setAttribute("Data","" )
		}
		item.parentNode.classList.toggle("active")

		const concreteMain = item.parentNode.parentNode
		concreteMain.classList.toggle("active")

		const textToToggle = concreteMain.querySelector(".pop-up__answer__text_text")
		textToToggle.classList.toggle("active")
		console.log(textToToggle)
	})
})