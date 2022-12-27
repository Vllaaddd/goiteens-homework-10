



// 2

const ingredientsUl = document.querySelector('#ingredients');

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

ingredients.forEach(el => {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    ingredientsUl.append(liEl)
})



// 3


const gallery = document.querySelector('#gallery')

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function createImg({url, alt}){
  const liEl = document.createElement('li');

  const imgEl = document.createElement('img');

  imgEl.url = url;
  imgEl.alt = alt;

  liEl.append(imgEl)

  gallery.append(liEl)
}

images.map(createImg)




// 4



let counterValue = 0;

const decrBtn = document.querySelector('.decrement')
const incrBtn = document.querySelector('.increment')
const spanEl = document.querySelector('#value')

decrBtn.addEventListener('click', e => {
  counterValue--
  spanEl.textContent = counterValue;
})

incrBtn.addEventListener('click', e => {
  counterValue++
  spanEl.textContent = counterValue;
})



// 5


const input = document.querySelector('#name-input');
const result = document.querySelector('#name-output');

input.addEventListener('input', e => {
  if(input.value === ''){
    result.innerHTML = 'незнайомець'
  }else{
    result.innerHTML = input.value;
  }
})







// 6



const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', e => {
  if(inputEl.value.length <= 6){
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }else{
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid');
  }
})





// 7




const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

inputRange.addEventListener('input', e => {
  text.style.fontSize = inputRange.value + 'px';
})



// 8




const mainBox = document.querySelector('#boxes');
const boxInput = document.querySelector('.boxInput');

let i = 0;

let size = 30;


const createBtn = document.querySelector('.render');
const removeBtn = document.querySelector('.destroy');

createBtn.addEventListener('click', e => {
  while(i != boxInput.value){
    const div = document.createElement('div');

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
    div.style.backgroundColor = '#' + randomColor;
    div.style.width = size;
    div.style.height = size;
    div.style.margin = 10;
    div.classList.add('box')


    mainBox.append(div)
    
    i++;

    size += 10;
  }

  const boxes = document.querySelectorAll('.box');
  console.log(boxes);

  removeBtn.addEventListener('click', e => {
    boxes.forEach(box => {
      box.remove();
    });
    document.location.reload(true)
  })

});



