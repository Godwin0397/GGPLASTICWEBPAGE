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


  // const products = [
  //   { img: onedram2dramhalfdrampp, label: "1/2Dram and 1Dram and 2Dram PP" },
  //   { img: onedram2dramhdpe, label: "1Dram and 2Dram HDPE" },
  //   { img: onedram2dramivory, label: "1Dram and 2Dram HDPE Ivory" },
  //   { img: thirtyml15mlpp, label: "15ML and 30ML PP" },
  //   { img: thirtyml15mlhdpe, label: "15ML and 30ML HDPE" },
  //   { img: tengram20gram40gram, label: "10Grams and 20Grams and 40Grams" },
  //   { img: hundredgrams, label: "100Grams" },
  //   { img: twohundredgrams, label: "200Grams" },
  //   { img: tenlitrecapinner, label: "10 Litre Cap and Inner" },
  //   { img: fifty20float5010float, label: "50*10 Flaot and 50*20 Float" },
  //   { img: twohundredeightfloat, label: "208 Float" },
  //   { img: twohundredeightggfloat, label: "208 GG Float" },
  //   { img: twentylitrecapinner, label: "20 litre Cap and Inner" },
  //   { img: smalldumbbox, label: "Small Dumb Box" },
  //   { img: bigdumbbox, label: "Big Dumb Box" }
  // ];


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