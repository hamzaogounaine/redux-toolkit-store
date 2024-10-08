import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/productsReducer'
import { addToCart, decrement, increment, removeFromCart } from './redux/cartReducer'
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash } from 'lucide-react'

const Home = () => {
  const products = useSelector(state => state.products.products)
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(data => dispatch(fetchProducts(data.data.products)))
  })

  useEffect(() => {
    console.log('cart', cart);

  }, [cart])

  const mode = useSelector(state => state.mode.isDark)

  return (
    <div className={mode ? 'dark' : ''}>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-background  text-foreground ">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col hover:scale-105 transition-all duration-150 ">
            <img
              src={product.images[0]}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

            <p className="text-secondary-foreground mb-4">${product.price.toFixed(2)}</p>
            {cart.find(el => el.id === product.id) && <span className='text-center mb-2'>Quantity : {cart.find(el => el.id === product.id).quantity}</span>}
            {cart.find(el => el.id === product.id) ?
              <div className='flex justify-between'>
                <Button
                  onClick={() => dispatch(decrement(product.id))}
                  className="mt-auto"
                >
                  <Minus />
                </Button>
                <Button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="mt-auto"
                >
                  <Trash />
                </Button>
                <Button
                  onClick={() => dispatch(increment(product.id))}
                  className="mt-auto"
                >
                  <Plus />
                </Button>
              </div>
              : <Button
                onClick={() => dispatch(addToCart(product))}
                className="mt-auto"
              >
                Add to Cart
              </Button>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home