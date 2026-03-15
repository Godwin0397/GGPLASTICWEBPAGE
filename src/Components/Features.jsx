import React from 'react'

import onedram2dramhalfdrampp from "../assets/Images/1dram2dramhalfdrampp.jpeg";
import onedram2dramhdpe from "../assets/Images/1dram2dramhdpe.png";
import onedram2dramivory from "../assets/Images/1dram2dramivory.png";
import thirtyml15mlpp from "../assets/Images/30ml15mlpp.png";
import thirtyml15mlhdpe from "../assets/Images/30ml15mlhdpe.png";
import tengram20gram40gram from "../assets/Images/10gram20gram40gram.jpeg";
import hundredgrams from "../assets/Images/100grams.jpeg";
import twohundredgrams from "../assets/Images/200grams.jpeg";
import fifty20float5010float from "../assets/Images/5020float5010float.jpeg";
import twohundredeightggfloat from "../assets/Images/208ggfloat.jpeg";
import twohundredeightfloat from "../assets/Images/208float.jpeg";
import tenlitrecapinner from "../assets/Images/10litrecapinner.jpeg";
import twentylitrecapinner from "../assets/Images/20litrecapinner.jpeg";
import smalldumbbox from "../assets/Images/smalldumbbox.jpeg";
import bigdumbbox from "../assets/Images/bigdumbbox.jpeg";

function Features() {


  const products = [
    { img: onedram2dramhalfdrampp, label: "1/2Dram and 1Dram and 2Dram PP" },
    { img: onedram2dramhdpe, label: "1Dram and 2Dram HDPE" },
    { img: onedram2dramivory, label: "1Dram and 2Dram HDPE Ivory" },
    { img: thirtyml15mlpp, label: "15ML and 30ML PP" },
    { img: thirtyml15mlhdpe, label: "15ML and 30ML HDPE" },
    { img: tengram20gram40gram, label: "10Grams and 20Grams and 40Grams" },
    { img: hundredgrams, label: "100Grams" },
    { img: twohundredgrams, label: "200Grams" },
    { img: tenlitrecapinner, label: "10 Litre Cap and Inner" },
    { img: fifty20float5010float, label: "50*10 Flaot and 50*20 Float" },
    { img: twohundredeightfloat, label: "208 Float" },
    { img: twohundredeightggfloat, label: "208 GG Float" },
    { img: twentylitrecapinner, label: "20 litre Cap and Inner" },
    { img: smalldumbbox, label: "Small Dumb Box" },
    { img: bigdumbbox, label: "Big Dumb Box" }
  ];


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