  console.log(`yey!`);
//form
  const subGenderForm = document.querySelector('#desserts-form');
//inputs
  const subGender = document.querySelector('#type');
  const subGenderType = document.getElementById('subGendertype');
//section
  const lista = document.querySelector('#lista');


  subGenderForm.addEventListener('submit', function(event){
    event.preventDefault();              // para evitar que se refresque la pagina cuando se da submit


    console.log('hemos detenido el submit');
    const subGenderValue = subGender.value;
    const typeValue = type.value;
    console.log(subGenderValue);
    console.log(typeValue);

//cuando se define con var dentro de la función, el lcance es de la función, cuando se declara la variable como let,
//el alcance es general(global)
    let subGenderImg;
      if(subGenderValue == 'pastor') {
         subGenderImg = 'pastor.jpg';
      } else if (subGenderValue == 'mexicana') {
         subGenderImg = 'mexicana.jpg';
      } else {
        subGenderImg = 'generica.jpg'
      }

    // lista.innerHtml = `Tu has seleccionado como postre sabor : ` + subGender;
    // estamos inyectando codigo html al script, solo funciona usando backtips
    lista.innerHTML += `
    <div class="subGender-orden">
      <h3>Has pedido un postre ${subGenderValue}</h3>
        <p>de la sección ${typeValue}</p>
        <p>Que lo disfrutes!!</p>
        <img src="assets/img/${subGenderImg}">
        <input id="confirm-button" type="button" value="confirmar" onclick="alert('se confirmo tu pedido')"/>
`
  });

  //      <ul> Tu subGender es sabor :  ${subGenderValue} </ul>
  //      <ul> el tamaño  de tu subGender es:  ${typeValue} </ul>
