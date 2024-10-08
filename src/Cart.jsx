import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from 'lucide-react'
import { addToCart, decrement, increment, removeFromCart } from './redux/cartReducer'


const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const total = cart.reduce((acc , item) => acc + item.price * item.quantity , 0)
    const mode = useSelector(state => state.mode.isDark)
    return (
        <div className={mode ? 'dark' : ''}>
            <div className=" mx-auto px-4 bg-background text-foreground min-h-screen">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="space-y-8">
                            {cart.map(item => (

                                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="rounded-md"
                                    />
                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold">{item.title}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => dispatch(decrement(item.id))}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => dispatch(increment(item.id))}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <p className="w-24 text-right font-semibold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                </div>
                            )
                            )}
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
                            <Button size="lg">
                                Proceed to Checkout
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart