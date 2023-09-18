const inputRange = document.querySelector('#myinput')
const inputCount = document.querySelector('.input__count')
const inputPassword = document.querySelector('.input__data--pass')
const checkBox1 = document.querySelector('#data1')
const checkBox2 = document.querySelector('#data2')
const checkBox3 = document.querySelector('#data3')
const checkBox4 = document.querySelector('#data4')
const allChangeInputs = document.querySelectorAll('.dataChange')
const btnCopyData = document.querySelector('.btn__copy--data')

let upperLaters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let numbers = [1,2,3,4,5,6,7,8,9]

let symbolls = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ';', ':', '<', '>', ',', '.', '?', '/']

let arr = [
     {
           info:'upper',
            status:true,
            data:[...upperLaters]
    },
    {      info:'lower',
            status:false,
            data:[...lowerLetters]
    },
    {      info:'num',
            status:false,
            data:[...numbers]
    },
    {       info:'symb' ,
            status:false,
            data:[...symbolls]
    },

]


let newArr = []

let free = []

let myNums = []

let pass = []

var createdPassword = []



window.addEventListener('DOMContentLoaded',()=>{
  let data = inputRange.value
    let amount = (data * 13) + (1.2 * data)
    inputCount.style.transform = `translateX(${amount}px)`



    let myPass = JSON.parse(localStorage.getItem('item'))

    // myPass

    sendCopyIedCodes(myPass);

    renderArr();
})



inputRange.addEventListener('input',(e)=>{
    
    let data = e.target.value
   
    let amount = (data * 13) + (1.2 * data)

    inputCount.textContent = data
    inputCount.style.transform = `translateX(${amount}px)`


    generateNumber(data)



    renderArr()
    
})



function generateNumber(myPassValue){
    // let myData = Math.ceil(Math.random()* myPassLength)
    // console.log(myData);

    free = []

    for(let i=0; i<myPassValue; i++){
        free.push(i)
    }


    shuffleArray(free)
   
    generatePassword() 

}


function changeUpper(data1){
    renderArr(data1);
}

function changeLower(data2){
    renderArr(data2);
}

function changeNum(data3){
    renderArr(data3);
}


function changeSymb(data4){
    renderArr(data4);
}



function renderArr(dataInfo){
          
             
  arr = arr.map(obj => obj.info === dataInfo ? {...obj, status: !obj.status} : {...obj} )


//   console.log(arr);
     
  filterData(arr)
     
}


function filterData(data){
    
    newArr = []

    arr.forEach(obj=>{
        if(obj.status === true){
            newArr.push(obj.data)
        }
    })


    myNums = newArr.flat()


    shuffleArray(myNums)

}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // getData()
}



function generatePassword(){
    
    pass = []

    free.forEach(num=>{
        pass.push(myNums[num])
    })

    
    inputPassword.textContent = pass.join('')
}


btnCopyData.addEventListener('click',function(e){

    e.preventDefault()

    let data = inputPassword.textContent

    const currentTime = new Date().toLocaleTimeString();
      
   

    createdPassword.push({data,currentTime})


    localStorage.setItem('item',JSON.stringify(createdPassword) )


    sendCopyIedCodes(createdPassword)

})


function sendCopyIedCodes(myData){

    // localStorage.setItem('item',JSON.stringify(createdPassword) )
    
    
    document.querySelector('.myCopyDatas').innerHTML = ''

// console.log(myData)


    myData.forEach(info=>{
        let html = `
        <div class="allPass__box">
        <div class="allPass__box--data">
            <div>
                <p class="pass__main">${info.data}</p>
                <p class="pass__data">Time: ${info.currentTime}</p>
            </div>
            <div class="pass__copy">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.375 22.5H6.375C6.07663 22.5 5.79048 22.3815 5.5795 22.1705C5.36853 21.9595 5.25 21.6734 5.25 21.375V6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25H21.375C21.6734 5.25 21.9595 5.36853 22.1705 5.5795C22.3815 5.79048 22.5 6.07663 22.5 6.375V21.375C22.5 21.6734 22.3815 21.9595 22.1705 22.1705C21.9595 22.3815 21.6734 22.5 21.375 22.5Z" fill="#FAFAFA"/>
                    <path d="M5.25 3.75H18.75V2.625C18.75 2.32663 18.6315 2.04048 18.4205 1.8295C18.2095 1.61853 17.9234 1.5 17.625 1.5H2.8125C2.4644 1.5 2.13056 1.63828 1.88442 1.88442C1.63828 2.13056 1.5 2.4644 1.5 2.8125V17.625C1.5 17.9234 1.61853 18.2095 1.8295 18.4205C2.04048 18.6315 2.32663 18.75 2.625 18.75H3.75V5.25C3.75 4.85218 3.90804 4.47064 4.18934 4.18934C4.47064 3.90804 4.85218 3.75 5.25 3.75Z" fill="#FAFAFA"/>
                    </svg></span>
            </div>
        </div>
      </div> 
        `

        document.querySelector('.myCopyDatas').insertAdjacentHTML('beforeend',html)



    }) 



}

// var pathname = window.location.pathname;
// var language_links = $(".selector__list a").get();




document.querySelector('.btn--clear').addEventListener('click',()=>{
    createdPassword = []

    document.querySelector('.myCopyDatas').innerHTML = ''

    localStorage.clear()

})





