import React, { useState } from 'react';
import './Css/card.css'
import '../mainPage/mobile.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


import Moca from './Imgs/Lunch/Cake/Cake-2.png';
import Alpes from './Imgs/Lunch/Cake/Cake-4.jpg';
import Truf from './Imgs/Lunch/Cake/Cake-3.jpg';
import Franc from './Imgs/Lunch/Cake/Cake-1.png'
import Pastel from './Imgs/Lunch/Frys/3-F.jpg'
import Pao from './Imgs/Lunch/Frys/4-F.jpg'
import Affo from './Imgs/Lunch/Coffe/1-C.jpg'
import Mocca from './Imgs/Lunch/Coffe/3-C.jpg'
import Alter from './Imgs/Lunch/Lunch/L-4.jpeg'
import Kaiser from './Imgs/Lunch/Lunch/L-1.jpg'



const products = [
  {
    id: 1,
    name: 'Moça-Churros',
    image: Moca,
    price: 21.95,
    description: 'Bolo branco, recheios de creme de churros e mousse de canela',
  },
  {
    id: 2,
    name: 'Alpes Suíços',
    image: Alpes,
    price: 49.75,
    description: 'Bolo de chocolate, recheios de mousse branca e trufado de chocolate, cobertura de mousse branca'
  },
  {
    id:3 ,
    name: 'Cake Trufado',
    image: Truf,
    price: 24.35,
    description: 'Bolo de chocolate, recheios de mousse de chocolate amargo e com miniballs na lateral'
  },
  {
    id: 4,
    name: 'Lá Francesa',
    image: Franc,
    price: 50.35,
    description: 'Bolo de chocolate, recheios de brigadeiro e cocada e com cobertura de mousse de chocolate'
  },
  {
    id: 5,
    name: 'Pastel de 4 Queijos',
    image: Pastel,
    price: 6.15,
    description: 'Pastel de quatro queijo com cheddar, mussarela,  catupiri, gorgonzola e parmesão'
  },

  {
    id: 6,
    name: 'Pão de Batata',
    image: Pao,
    price: 7.15,
    description: 'Pão de batata, recheado com cream cheese'
  },
  {
    id: 7,
    name: 'Affogato',
    image: Affo,
    price: 10.25,
    description: 'O affogato é uma sobremesa italiana feita à base de café e sorvete'
  },
  {
    id: 8,
    name: 'Mocaccino',
    image: Mocca,
    price: 12.15,
    description: 'O Moca e uma variação de café com leite e creme ou chantily'
  },
  {
    id: 9,
    name: 'Alter',
    image: Alter,
    price: 18.95,
    description: '>Pão, Queijo, Frango empanado, Bacon, Cebola Crispy, Salada e Molho Ranch'
  },
  {
    id: 10,
    name: 'Kaiser',
    image: Kaiser,
    price: 21.15,
    description: 'Pão, Maionese, Hambúrguer 160g, Queijo prato, Cebola Roxa, Tomate e Alface'
  },

];





const MenuSection = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFilter] = useState(products);
  const [cart, setCart] = useState([]); 

const addToCart = (product, event) => {
    event.preventDefault();
    setCart([...cart, product]); 
  
}


const filterItems = (e) =>  {
  const searchValue = e.target.value;
  const filtered = products.filter((product) => 
  product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setSearch(searchValue)
  setFilter(filtered || products)
}



  return (
    <main className="main">
      <section className="head" id="Menu">
        <h1>Lanchonete da Dsu</h1>
        <div className="search">
          <input type="text" id="searchInput" placeholder="O que vai levar hoje?" value={search} onChange={filterItems} />
        </div>
        <Link to="/cart"state={{ products: cart }} > 
        <button className='shopping-icon'>
          <span>
            <FaShoppingCart />
          <span>Carrinho</span>
          </span>
        </button>
        </Link>
      </section>
      <section>
        <ul className="card" id="items">
          {filtered.map ((product) => (
            <li key={product.id}>
              <a href={`#item${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
              </a>
              <p className="price">R${product.price}</p>
              <h3>{product.description}</h3>
              <p>
                <button className="add-to-cart" onClick={(event) => addToCart(product, event)}>Adicionar ao Carrinho</button>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};


export default MenuSection;

  