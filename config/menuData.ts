export type MenuItem = {
id: number;
name: string;
price: number;
image: string;
category: string;
favorite?: boolean;
};

export const menuItems: MenuItem[] = [
{ id: 1, name: "Cheese Pizza", price: 180, image: "/images/menu/pizza.jpg", category: "Snacks", favorite: true },
{ id: 2, name: "Chicken Momos", price: 120, image: "/images/menu/momos.jpg", category: "Snacks", favorite: true },
{ id: 3, name: "Royal Falooda", price: 140, image: "/images/menu/falooda.jpg", category: "Cool", favorite: true },
{ id: 4, name: "Choco Cake", price: 450, image: "/images/menu/cake.jpg", category: "Cakes", favorite: true },
];