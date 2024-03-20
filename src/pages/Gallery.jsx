import { React, useEffect, useState } from 'react'
import fruits from './fruits.json'
import Product from '../components/Product';
import Pegenation from '../components/pegenation';
import Search from '../components/search';

function Gallery() {


  const [fruits_ar, setFruits_ar] = useState(fruits);
  const [render_ar, setRender_ar] = useState(fruits_ar);
  const [choise, setChoise] = useState("");
  const [freeChoice, setFreeChoice] = useState("");

  const createGallery = (ar) => {
    return ar.map((item, index) => {
      return <Product key={index} index={index} name={item.name} calories={item.calories} price={item.price} ingredients={item.ingredients} sugar_teaspoons={item.sugar_teaspoons} image_url={item.image_url} />
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [render_ar])


  return (
    <>

      <div className='container-fluid text-center text-danger'>
        <div className='container'>

        <div className='rounded-4' style={{ background: "pink" }}><h2 className="mt-5 display-5 text-center text-danger">Our prodacts</h2></div>

          <div style={{ background: "pink" }} className='rounded-4 d-flex justify-content-center align-items-center mb-5 pb-3'>
            <Search freeChoice={freeChoice} choise={choise} fruits={fruits} setFruits_ar={setFruits_ar} setFreeChoice={setFreeChoice} setChoise={setChoise} />
          </div>

          <section className="row justify-content-around">
            {createGallery(render_ar)}
          </section>

          <Pegenation fruits_ar={fruits_ar} setRender_ar={setRender_ar} />
        </div>
      </div>
    </>
  )
}
export default Gallery


