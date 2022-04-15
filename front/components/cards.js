const $app = document.getElementById("up-cards");
const Card = (params) => {
  const clas = `${params.clas}`;
  return `
  <div class="card">
    <div class="icon">
        <i class="${clas}"></i>
    </div> 
    <h3>${params.title}</h3>
    <p>${params.text}</p>
  </div>
   
    `;
};

$app.innerHTML += Card({
  clas: "far fa-hand-point-up",
  title: "ELEGÍ UN AUTO",
  text: "Acorde a tus intereses",
});
$app.innerHTML += Card({
  clas: "fas fa-id-card",
  title: "RETIRA EL AUTO",
  text: "Combina el lugar de encuentro con el propietario",
});

$app.innerHTML += Card({
  clas: "fas fa-car",
  title: "VIAJA SEGURO",
  text: "Cocoche cuenta con un seguro todo riesgo  y retiene un deposito en la tarjeta como garantía.",
});
$app.innerHTML += Card({
  clas: "far fa-credit-card",
  title: "REALIZA EL PAGO",
  text: "Abonás el costo del alquiler",
});
