export const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/optimized/${fileName}`

export const images = {
  logo: imagePath('agij-fert-logo.png'),
  hero: imagePath('soja-brasnorte-1600.webp'),
  heroSrcSet: `${imagePath('soja-brasnorte-800.webp')} 800w, ${imagePath('soja-brasnorte-1600.webp')} 1600w`,
  harvest: imagePath('soja-rondonopolis-900.webp'),
  harvestSrcSet: `${imagePath('soja-rondonopolis-600.webp')} 600w, ${imagePath('soja-rondonopolis-900.webp')} 900w`,
  satellite: imagePath('soja-primavera-do-leste-aerea-900.webp'),
  satelliteSrcSet: `${imagePath('soja-primavera-do-leste-aerea-600.webp')} 600w, ${imagePath('soja-primavera-do-leste-aerea-900.webp')} 900w`,
}
