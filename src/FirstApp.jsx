const title = 'First App'

const verificarParImpar = function(numero) {
  if (typeof numero !== 'number') {
    console.error('Error: El valor proporcionado no es un número.');
    return;
  }

  if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
  } else {
    console.log(`${numero} es un número impar.`);
  }
}

verificarParImpar(10);

/* Arrow Function
const verificarParImpar = (numero) => {
  if (typeof numero !== 'number') {
    console.error('Error: El valor proporcionado no es un número.');
    return;
  }

  if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
  } else {
    console.log(`${numero} es un número impar.`);
  }
};

verificarParImpar(7);
*/ 

function FirstApp(){
    return (
    <>
    <h1> { title } </h1>
    <span> 10 </span>
    </>
    )
  }
  
  export default FirstApp