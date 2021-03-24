//const myAge = 27
//const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// left side is when conditon passes and right side is for when condition fails

const myAge = 30
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)


const team = ['Tyler', 'Porter']
console.log(team.length <=4 ? `Team size: ${team.length}` : 'Too many people on your team')



// Old long way to write when only having 1-2 things to argu not using the conditional operator
    //if (myAge >= 18) {
      //  message = 'You can vote!'
    //} else {
      //  'You can not vote.'
    //}

 Hello