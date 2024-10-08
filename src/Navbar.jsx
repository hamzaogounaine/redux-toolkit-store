import { Moon, ShoppingCart, Sun } from 'lucide-react'
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { toggleMode } from './redux/DarkMode'


const Navbar = () => {
    const cart = useSelector(state=> state.cart.cart)
    const cartItems = cart.reduce((acc , item) => acc + item.quantity , 0)
    const mode = useSelector(state => state.mode.isDark)
    const dispatch = useDispatch()
    return (
        <div className={mode ? 'dark' : ''}>
            <header className="flex justify-between items-center  p-4 bg-background border-b  border-foreground text-foreground">
                <Link to={'/'} className="text-xl font-bold">Our Products</Link>
                <div className='flex gap-3 items-center'>

                <Button onClick={() => dispatch(toggleMode())}>{mode ? <Sun /> : <Moon />}</Button>
                <Link to={'/cart'} className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    {cartItems.length  !== 0  && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {cartItems}
                        </span>
                    )}
                </Link>
                    </div>
            </header>
        </div>
    )

}

export default Navbar