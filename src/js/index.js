// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// Realizar primero el CSS
// Crear un array con palabras de cinco letras
// Sacar una palabra aleatoria del array
// Si la palabra que escribo contiene menos 5 letras o mas de 5 que salte un aviso de que la palabra debe contener 5 letras
// Hacer que el texto que yo meta en el form se pinte en el grid (dando intro)
// Hacer que cada vez que yo pinte una palabra se añada a la línea de bajo de la anterior

// Si la letra está en la posición correcta que se pinte verde (recorriendo)
// Verificar que la palabra que yo meta si las letras no están se pinten en gris (recorriendo)
// Si la letra está pero no en la posición correcta que se pinte de amarillo (recorriendo)
// Crear animaciones

// cuando tu añades una clase tienes que quitar las anteriores

const mainElement = document.getElementById('main');
const letters = document.getElementById('letters');
const form = document.getElementById('form');
const alertElement = document.getElementById('alert');

const arrayWords = ['gatos', 'casas', 'adios', 'arbol'];

let counter = 0;

let aleatoryWord;

const randomWord = () => {
  const aletory = arrayWords[Math.floor(Math.random() * arrayWords.length)];
  return aletory;
};
aleatoryWord = randomWord();

const checkLength = event => {
  if (event.target.text.value.length < 5) {
    alertElement.textContent = 'La palabra contiene menos de 5 letras';
  } else if (event.target.text.value.length > 5) {
    alertElement.textContent = 'La palabra contienes más de 5 letras';
  } else {
    alertElement.textContent = '';
    textWrite(event);
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();
  checkLength(event);
  event.target.reset();
});

const textWrite = event => {
  console.log(letters.children[counter].children);
  for (let i = 0; i < 5; i++) {
    letters.children[counter].children[i].textContent =
      event.target.text.value[i];
  }
  correctWord(event);
  counter++;
};

const correctWord = event => {
  for (let i = 0; i < 5; i++) {
    if (event.target.text.value[i] === aleatoryWord[i]) {
      letters.children[counter].children[i].classList.add('letter--green');
    }

    for (let i = 0; i < 5; i++) {
      if (!aleatoryWord.includes(event.target.text.value[i])) {
        letters.children[counter].children[i].classList.add('letter--gray');
      }
      if (aleatoryWord.includes(event.target.text.value[i])) {
        letters.children[counter].children[i].classList.add('letter--yellow');
        letters.children[counter].children[i].replace(
          event.target.text.value[i],
          '/'
        );
      }
    }
  }
};

console.log(aleatoryWord);
