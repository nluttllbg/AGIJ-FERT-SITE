export const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/optimized/${fileName}`

export const images = {
  logo: imagePath('agij-fert-logo.png'),
  hero: imagePath('soja-brasnorte.webp'),
  harvest: imagePath('soja-rondonopolis.webp'),
  satellite: imagePath('soja-primavera-do-leste-aerea.webp'),
  territory: imagePath('brasil-sao-simao-aerea.webp'),
}
