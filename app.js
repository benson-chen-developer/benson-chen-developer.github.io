const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

//Selecting the project to display
const routinesBtn = document.querySelector('#routinesButton');
const collegeBtn = document.querySelector('#collegeButton');
const connectBtn = document.querySelector('#connectBtn');

const routines = document.querySelector('.routines')
const collegeWork = document.querySelector('.collegeWork')
const connectWithMe = document.querySelector('.connect')

routinesBtn.addEventListener('click', () => {
    routines.classList.add('selected')
    routines.classList.remove('notSelected')
   // routinesBtn.classList.add("isRoutinesCard");

    collegeWork.classList.add('notSelected')
    collegeWork.classList.remove('selected')
   // collegeBtn.classList.remove('isCollegeCard')

    connectWithMe.classList.add('notSelected')
    connectWithMe.classList.remove('selected')
  //  connectBtn.classList.remove('isConnectCard')
})
collegeBtn.addEventListener('click', () => {
    routines.classList.remove('selected')
    routines.classList.add('notSelected')
 //   routinesBtn.classList.remove("isRoutinesCard");

    collegeWork.classList.remove('notSelected')
    collegeWork.classList.add('selected')
  //  collegeBtn.classList.add('isCollegeCard')

    connectWithMe.classList.add('notSelected')
    connectWithMe.classList.remove('selected')
 //  connectBtn.classList.remove('isConnectCard')
})


connectBtn.addEventListener('click', () => {
    routines.classList.remove('selected')
    routines.classList.add('notSelected')
  //  routinesBtn.classList.remove("isRoutinesCard");

    collegeWork.classList.add('notSelected')
    collegeWork.classList.remove('selected')
  //  collegeBtn.classList.remove('isCollegeCard')

    connectWithMe.classList.remove('notSelected')
    connectWithMe.classList.add('selected')
  //  connectBtn.classList.add('isConnectCard')
})