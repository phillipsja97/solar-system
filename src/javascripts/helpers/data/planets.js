/* eslint-disable max-len */
const planets = [
  {
    name: 'Earth',
    imageUrl: 'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.Earths gravity interacts with other objects in space, especially the Sun and the Moon, which is Earths only natural satellite. Earth orbits around the Sun in 365.26 days, a period known as an Earth year.During this time, Earth rotates about its axis about 366.26 times.',
    isGasPlanet: 'false',
    numberOfMoons: '1',
    nameOfLargestMoon: 'Moon',
  },

  {
    name: 'Saturn',
    imageUrl: 'https://www.gannett-cdn.com/presto/2018/12/19/USAT/5e6faedd-72b1-4209-b8f1-c25e57a7d363-VPC_SATURN_RINGS_nasa.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the gods sickle. ',
    isGasPlanet: 'true',
    numberOfMoons: '102',
    nameOfLargestMoon: 'Titan',
  },

  {
    name: 'Mercury',
    imageUrl: 'https://apod.nasa.gov/apod/image/1303/PIA16853mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Like Venus, Mercury orbits the Sun within Earths orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or eastern horizon before sunrise, usually in twilight.',
    isGasPlanet: 'false',
    numberOfMoons: '0',
    nameOfLargestMoon: 'none',
  },

  {
    name: 'Venus',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/dzxtQ2dXH9SVKztJTbAXSA-970-80.jpg',
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight. Venus lies within Earths orbit, and so never appears to venture far from the Sun, setting in the west just after dusk and rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.',
    isGasPlanet: 'false',
    numberOfMoons: '0',
    nameOfLargestMoon: 'none',
  },

  {
    name: 'Mars',
    imageUrl: 'https://cdn.hswstatic.com/gif/mars-a1.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.',
    isGasPlanet: 'false',
    numberOfMoons: '2',
    nameOfLargestMoon: 'Phobos',
  },

  {
    name: 'Jupiter',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter has been known to astronomers since antiquity. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can be bright enough for its reflected light to cast shadows, and is on average the third-brightest natural object in the night sky after the Moon and Venus.',
    isGasPlanet: 'true',
    numberOfMoons: '79',
    nameOfLargestMoon: 'Ganymede',
  },

  {
    name: 'Uranus',
    imageUrl: 'https://solarstory.net/img/articles/big/planet-uranus-by-voyager-2-in-1986.jpg',
    description: 'Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus atmosphere is similar to Jupiters and Saturns in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons.',
    isGasPlanet: 'true',
    numberOfMoons: '27',
    nameOfLargestMoon: 'Titania',
  },

  {
    name: 'Neptune',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB-970-80.jpg',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.',
    isGasPlanet: 'true',
    numberOfMoons: '14',
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
