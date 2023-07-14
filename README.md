## Online Food Ordering System
This project is a simple online food ordering system for a restaurant. It allows users to view the menu, place orders, and view order summaries. The application is built using React.js and Node.js.

## Features
- Menu Display: The application displays the menu of dishes available in the restaurant, including dish name, description, price, and image.
- Order Placement: Users can select dishes from the menu and place orders, specifying the quantity for each dish.
- Order Summary: After placing an order, users can view a summary of their order, including the dishes ordered, quantities, total price, order place delivery time and estimated delivery time.

## Technologies Used
- Front-end: React.js, TailwindCSS
- Back-end: Node.js, Express.js
- Database: MongoDB
- packages: Axios, React-router-dom, React-icons, React-hot-toast
- Deployment: Netlify, Vercel

## Folder Structure

The project follows the following folder structure:

- `src`: Contains the source code files.
    - `components`: Contains reusable single components.
        - `FoodCard`
        - `OrderRow`
        - `OurMenuSection`
        - `Shared`: contains navbar, footer and common files.
            - `Footer`
            - `Loading`
            - `MiniTopNav`
            - `Navbar`
    - `hooks`: Contains custom hook of the application.
        - `useMenu`
    - `layouts`: Contains layouts file of the application.
        - `main`
    - `pages`: Contains different pages of the application.
        - `Home`
        - `Menu`
        - `MyOrders`
        - `About`
        - `Contact`
        - `ErrorPage`
    - `routes`: Contains all routes code of the application.
        - `router`
    - `utls`: The entry point of the React application.
        - `axiosInstance.js`
        - `setCustomerId.js`
    - `index.css`: The main css file of the React application.
    - `main.jsx`: The main file for render of the React application.
- `README.md`: The main documentation file.
- `index.html`: The main documentation file.
- `package.json`: The file that lists project dependencies and scripts.
- `tailwind.config.js`: The file that lists project dependencies and scripts.
- `vite.config.js`: The file that lists project dependencies and scripts.

## Installation Client Site

Clone the repository and following steps:
```bash
git clone https://github.com/NahidAhmed47/online-food-ordering-system.git
```
```bash
cd online-food-ordering-system
```
```bash
npm install
```
```bash
npm run dev
```


## Installation Server Site

Server repository link: <a href="https://github.com/NahidAhmed47/online-food-ordering-system-server" target="_blank">Click Here</a>
```bash
git clone https://github.com/NahidAhmed47/online-food-ordering-system-server.git
```
```bash
cd online-food-ordering-system
```
```bash
npm install
```
```bash
npm start
```

## Client Site Live Link
<a href="https://online-food-ordering-system-client.netlify.app/" target="_blank">Online food ordering system</a>
