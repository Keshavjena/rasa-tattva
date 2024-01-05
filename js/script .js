import check from '../assets/check.svg'
import star from '../assets/star.svg'
import coconutwater from '../assets/coconut-water.png'
import thali from '../assets/thali.png'
import tiramisu from '../assets/tiramisu.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: coconutwater,
        alt: "coconutwater",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: thali,
        alt: "thali",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: tiramisu,
        alt: "tiramisu",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];