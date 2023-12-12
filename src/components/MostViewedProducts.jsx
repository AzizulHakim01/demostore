import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MostViewedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='w-full'>
      <div className="text-center">
        <h1 className='text-xl bg-[#5089AC] py-2 text-white font-bold'>People Viewing These</h1>
        <div className="grid grid-cols-1 gap-10 p-3">
          {products.map((item) => {
            return (
              <div className="flex items-center justify-between gap-4" key={item.id}>
                <div className="">
                  <img src={item.image} alt={item.title} className='w-20'/>
                </div>
                <div className="flex flex-col justify-start text-start gap-2 w-40">
                  <Link to={`/single/${item.id}`}>{item.title}</Link>
                  <p>{item.price} $</p>
                </div>
              </div>
            );
          })}
          {/* More products... */}
        </div>
      </div>
    </div>
  )
}

export default MostViewedProducts