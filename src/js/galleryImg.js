import bucarosAmarillo from "@assets/img/galeria/sudadera-bucaros-amarillo.webp";
import salesiano from "@assets/img/galeria/Buzosalesiano.webp";
import colnupaz from "@assets/img/galeria/Polocolnupaz.webp";
import fundareservaBlanco from "@assets/img/galeria/Polo-Fundareserva-Blanco.webp";
import bucarosAzul from "@assets/img/galeria/sudadera-bucaros-azul.webp";
import poloVerde from "@assets/img/galeria/Poloverde.webp";

export default () => ({

  slides: [
    {
      id: 1,
      image: bucarosAmarillo,
      alt: "sudadera bucaros amarillo",
    },
    {
      id: 2,
      image: salesiano,
      alt: "buzo colegio salesiano",
    },
    {
      id: 3,
      image: colnupaz,
      alt: "polo colegio nuestra señora de la paz",
    },
    {
      id: 4,
      image: fundareservaBlanco,
      alt: "polo fundareserva blanco",
    },
    {
      id: 5,
      image: bucarosAzul,
      alt: "sudadera bucaros Azul",
    },
    {
      id: 6,
      image: poloVerde,
      alt: "polo verde",
    },
  ], 
  currentSlide:1,

});
