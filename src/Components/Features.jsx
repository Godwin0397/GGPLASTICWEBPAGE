import React, { useEffect, useState } from 'react'
import productServices from '../services/productServices';

function Features() {

  const [products, setproducts] = useState([])

  const allProducts = async () => {
    try {
      let { data } = await productServices.allProducts()
      console.log(data.allProducts)
      const filteredProducts = data.allProducts.filter(item=> item.type === "Product").map(item=>({
          label: item.productName,
          img: item.productURL
      }))
      setproducts(filteredProducts)

    } catch (error) {
      console.log("view all products error", error.message);
      alert(error.message);
    }
  }

  useEffect(() => {
    allProducts()
  }, [])

  useEffect(()=> {
    return ()=>{
      setproducts([])
    }
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Products</h2>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>

              <div className="border rounded shadow-sm p-2 bg-white">

                <div className="position-relative square-image">

                  <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                    {product.label}
                  </span>

                  <img
                    src={product.img}
                    alt={product.label}
                    className="img-fluid"
                  />

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Features