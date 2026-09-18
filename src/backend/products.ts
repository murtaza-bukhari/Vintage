import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
import item8 from "../assets/item8.png";
import item9 from "../assets/item9.png";
import item10 from "../assets/item10.png";
import item11 from "../assets/item11.png";
import item12 from "../assets/item12.png";

type Product = {
    id: number;
    title: string;
    photo: string;
    description: string;
    price: number;
};

const products: Product[] = [
    {
        id: 1,
        title: "Classic Silver Shears",
        photo: item1,
        description: "Precision-cutting shears crafted for smooth, effortless styling.",
        price: 42,
    },
    {
        id: 2,
        title: "Midnight Barber Shears",
        photo: item2,
        description: "Dark steel shears combining sharp performance with timeless style.",
        price: 48,
    },
    {
        id: 3,
        title: "Heritage Thinning Shears",
        photo: item3,
        description: "Fine-toothed shears designed for natural blending and texture.",
        price: 45,
    },
    {
        id: 4,
        title: "Walnut Straight Razor",
        photo: item4,
        description: "A traditional steel razor finished with a rich walnut handle.",
        price: 36,
    },
    {
        id: 5,
        title: "Brass Safety Razor",
        photo: item5,
        description: "A balanced safety razor made for a close and comfortable shave.",
        price: 32,
    },
    {
        id: 6,
        title: "Walnut Shaving Brush",
        photo: item6,
        description: "Soft dense bristles create a rich, smooth lather for every shave.",
        price: 24,
    },
    {
        id: 7,
        title: "Classic Neck Duster",
        photo: item7,
        description: "A soft barber brush that gently clears away loose hair.",
        price: 22,
    },
    {
        id: 8,
        title: "Tortoiseshell Pocket Comb",
        photo: item8,
        description: "A compact fine-tooth comb with a polished vintage finish.",
        price: 14,
    },
    {
        id: 9,
        title: "Professional Styling Comb",
        photo: item9,
        description: "A versatile dual-tooth comb made for precise everyday styling.",
        price: 16,
    },
        {
        id: 10,
        title: "Professional Styling Comb",
        photo: item10,
        description: "A versatile dual-tooth comb made for precise everyday styling.",
        price: 16,
    },
        {
        id: 11,
        title: "Professional Styling Comb",
        photo: item11,
        description: "A versatile dual-tooth comb made for precise everyday styling.",
        price: 16,
    },
    {
        id: 12,
        title: "Professional Styling Comb",
        photo: item12,
        description: "A versatile dual-tooth comb made for precise everyday styling.",
        price: 16,
    },
];

export default products;