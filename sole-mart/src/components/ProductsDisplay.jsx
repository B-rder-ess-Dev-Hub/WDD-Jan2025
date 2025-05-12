import { useEffect } from "react"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

const ProductsDisplay = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        products.map((product) => (
          <div key={product.id} className="">
            <div>
              <img src={product.imageSrc} alt={product.name} />
            </div>

            <div>
              <div>
                <h2>{product.name} <FaStar className="text-yellow-400"/> </h2>
                <h2>${product.price}</h2>
              </div>

              <p>{product.numberInStock} shoes available</p>
              <p>({product.numberOfReviews})</p>
              <div>
                <button>Add To Cart</button>
                <button>Add Shortlist</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsDisplay

// useEffect and useState