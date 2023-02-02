const accrodionButtons = document.querySelectorAll('.pop-up__answer_plus')

const menuTrigger = document.querySelector('#chatCircle')
const menu = document.querySelector('.pop-up-block')
const crossCloseIcon = document.querySelector('.pop-up__cross')

const questionsWrapper = document.querySelector('.pop-up__question')
const answerWrapper = document.querySelector('.pop-up__answer-wr')

const searchInput = document.querySelector('.pop-up__search_input')
const failedSearchPopUp = document.querySelector('.pop-up__empty')

function addAnswerMenu (parentTriggerId, menu) {
  const answerMenuTrigger = document.querySelectorAll(`${parentTriggerId} > *`)

  const quesitonsWrapper = document.querySelector('.pop-up__question')

  const menuToShow = document.querySelector(`${menu}`)

  const returnBtn = document.querySelector('.pop-up__answer_img')

  answerMenuTrigger.forEach(item => {
    item.addEventListener('click', () => {
      menuToShow.classList.remove('open-animation')
      quesitonsWrapper.classList.toggle('none')

      menuToShow.classList.toggle('none')
      menuToShow.classList.add('open-animation')
    })
  })

  returnBtn.addEventListener('click', () => {
    menuToShow.classList.add('close-animation-fast')
    setTimeout(() => {
      quesitonsWrapper.classList.toggle('none')

      menuToShow.classList.toggle('none')
      menuToShow.classList.remove('close-animation-fast')
    }, 301)
  })
}
// функция для добавления новых меню,первый параметр - родитель елементов,на которые будет вешаться обработчик клика,
// Второй параметр - меню,которое должно быть показано,
addAnswerMenu('#pop-up__main-question', '.pop-up__answer-wr')

menuTrigger.addEventListener('click', () => {
  menu.classList.remove('close-animation')
  menu.classList.toggle('active')
})

crossCloseIcon.addEventListener('click', () => {
  menu.classList.add('close-animation')
  setTimeout(() => {
    menu.classList.toggle('active')
  }, 701)
})

accrodionButtons.forEach(item => {
  item.addEventListener('click', () => {
    if (item.hasAttribute('Data')) {
      item.setAttribute('src', 'img/PopUp/plusIcon.svg')
      item.removeAttribute('Data')
    } else {
      item.setAttribute('src', 'img/PopUp/minusIcon.svg')
      item.setAttribute('Data', '')
    }
    item.parentNode.classList.toggle('active')

    const concreteMain = item.parentNode.parentNode
    concreteMain.classList.toggle('active')

    const textToToggle = concreteMain.querySelector('.pop-up__answer__text_text')
    textToToggle.classList.toggle('active')
  })
})

searchInput.addEventListener('change', () => {
  if (searchInput.value === 'false') {
    failedSearchPopUp.classList.remove('none')

    questionsWrapper.classList.add('none')
    answerWrapper.classList.add('none')
  } else if (searchInput.value === 'true') {
    failedSearchPopUp.classList.add('none')

    questionsWrapper.classList.remove('none')
  }
})
