// Mostrar/Ocultar listas al hacer clic en el botón correspondiente
for (let i = 1; i <= 8; i++) {
  const toggleButton = document.getElementById(`toggleButton${i}`);
  const myList = document.getElementById(`myList${i}`);

  if (toggleButton && myList) {
    toggleButton.addEventListener("click", () => {
      myList.style.display = myList.style.display === "none" ? "block" : "none";
    });
  }
}

// Función para mostrar la imagen correspondiente del producto en el carrusel
function mostrarDetalles(producto) {
  const carousels = {
    Lexington: "#carouselResorte",
    Brighton: "#carouselResorte",
    Kingsbury: "#carouselResorte",
    Gold_luxury: "#carouselResorte",
    Xl_Advanced: "#carouselResorte",
    Finesse: "#carouselResorte",
    Aspen: "#carouselResorte",
    Serenity: "#carouselResorte",
    April: "#carouselResorte",
    Pravia: "#carouselResorte",
    Dynasty: "#carouselResorte",
    NimbusFirm: "#carouselEspuma",
    LDorada: "#carouselEspuma",
    Pyxis: "#carouselEspuma",
    Family: "#carouselEspuma",
    ClasicoBanda: "#carouselEspuma",
    Sanatorial: "#carouselEspuma",
    Premium: "#carouselEspuma",
    PremiumPillow: "#carouselEspuma",
    Sensacion: "#carouselEspuma",
    Inducol: "#carouselSomier",
    Kingkoil: "#carouselSomier",
    MarineroUcrania: "#carouselSomier",
    Dubella: "#carouselAlmohadas",
    Duvetina: "#carouselAlmohadas",
    Cherie: "#carouselAlmohadas",
    SuamirEsencia: "#carouselAlmohadas",
    SuamirSoft: "#carouselAlmohadas",
    Paris: "#carouselAlmohadas",
    TouchCloud: "#carouselAlmohadas",
    TouchLargue: "#carouselAlmohadas",
    CherieEternelle: "#carouselAlmohadas",
    EcoComodin: "#carouselAlmohadas",
    UltraPlush: "#carouselAlmohadas",
    ViscoEspecial: "#carouselAlmohadas",
    ViscoCervical: "#carouselAlmohadas",
    TresCuerpos: "#carouselSillones",
    Cama: "#carouselSillones",
    Butaca: "#carouselSillones",
    Puf: "#carouselSillones",
    Reposera: "#carouselSillones",
    ColchonetaGim: "#carouselVarios",
    ColchonetaCamping: "#carouselVarios",
    ColchonetaBebe: "#carouselVarios",
    AlmSillas: "#carouselVarios",
    PoliesterMolido: "#carouselPoliester",
    img1: "#carouselPoliester",
    img2: "#carouselPoliester",
    img3: "#carouselPoliester",
    img4: "#carouselPoliester",
    img5: "#carouselPoliester",
    img6: "#carouselPoliester",
  };

  const items = {
    Lexington: 0,
    Brighton: 1,
    Kingsbury: 2,
    Gold_luxury: 3,
    Xl_Advanced: 4,
    Finesse: 5,
    Aspen: 6,
    Serenity: 7,
    April: 8,
    Pravia: 9,
    Dynasty: 10,
    NimbusFirm: 0,
    LDorada: 1,
    Pyxis: 2,
    Family: 3,
    ClasicoBanda: 4,
    Sanatorial: 5,
    Premium: 6,
    PremiumPillow: 7,
    Sensacion: 8,
    Inducol: 0,
    Kingkoil: 1,
    MarineroUcrania: 2,
    Dubella: 0,
    Duvetina: 1,
    Cherie: 2,
    SuamirEsencia: 3,
    SuamirSoft: 4,
    Paris: 5,
    TouchCloud: 6,
    TouchLargue: 7,
    CherieEternelle: 8,
    EcoComodin: 9,
    UltraPlush: 10,
    ViscoEspecial: 11,
    ViscoCervical: 12,
    TresCuerpos: 0,
    Cama: 1,
    Butaca: 2,
    Puf: 3,
    Reposera: 4,
    ColchonetaGim: 0,
    ColchonetaCamping: 1,
    ColchonetaBebe: 2,
    AlmSillas: 3,
    PoliesterMolido: 0,
    img1: 1,
    img2: 2,
    img3: 3,
    img4: 4,
    img5: 5,
    img6: 6,
  };

  const carousel = carousels[producto];
  const itemIndex = items[producto];

  if (carousel && typeof itemIndex === "number") {
    const carouselElement = document.querySelector(carousel);
    if (carouselElement) {
      const carouselInstance = new bootstrap.Carousel(carouselElement);
      carouselInstance.to(itemIndex);
    }
  }
}

// Maneja el evento click en los elementos <li> para mostrar detalles
document.querySelectorAll('ul[id^="myList"] li').forEach((item) => {
  item.addEventListener("click", function () {
    const producto = this.getAttribute("onclick")
      .replace("mostrarDetalles('", "")
      .replace("')", "");
    mostrarDetalles(producto);
  });
});
