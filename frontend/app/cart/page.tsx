'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Trash2, AlertCircle, ChevronRight, Plus, Minus, ShoppingCart, LucideLoader } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Loader from '@/components/Loader'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

interface CartItem {
  productId: string
  quantity: number
  size: string
  price: string
  _id: string
  image: string
  name: string
}

interface CartData {
  success: boolean
  data: CartItem[]
  totalPrice: number
}

export default function OptimizedCoolCartPage() {
  const [cartData, setCartData] = useState<CartData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [couponCode, setCouponCode] = useState('')
  const [removeLoading, setRemoveLoading] = useState(false);
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);
  const userId = Cookie.get('userId')
  const router = useRouter()

  const fetchCartData = useCallback(async () => {
    if (!userId) {
      setIsLoading(false)
      router.push('/login')
      return
    }

    try {
      const response = await fetch(`/api/cart/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      if (!data.success) throw new Error(data.error)
      setCartData(data)
    } catch (err) {
      setError("An error occurred while fetching cart data")
    } finally {
      setIsLoading(false)
    }
  }, [userId, router])

  useEffect(() => {
    fetchCartData()
  }, [fetchCartData])

  const handleQuantityChange = useCallback(
    debounce(async (itemId: string, newQuantity: number, size: string, price: string) => {
      if (!userId || !cartData) return
      if (newQuantity === 0) {
        handleRemoveItem(itemId)
        return
      }

      try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
            products: [{
              productId: itemId.toString(),
              quantity: newQuantity,
              size: size,
              price: price
            }],
            totalPrice: 0
          }),
        }).then((res) => res.json())

        if (!response.success) throw new Error(response.error)
        await fetchCartData()
      } catch (err) {
        setError('Failed to update quantity')
        // Revert the quantity change if the API call fails
        setCartData((prevData: any) => ({
          ...prevData,
          data: prevData.data.map((item: any) =>
            item.productId === itemId ? { ...item, quantity: item.quantity } : item
          )
        }))
      }
    }, 500),
    [userId, cartData, fetchCartData]
  )

  const handleRemoveItem = async (itemId: string) => {
    setRemovingItemId(itemId);
    if (!userId || !cartData) return
    try {
      const response = await fetch(`/api/cart/${userId}/removeproduct`, {
        method: 'DELETE',
        body: JSON.stringify({ productId: itemId.toString() })
      }).then((res) => res.json());

      if (!response.success) {
        throw new Error(response.error)
      }
      else {
        await fetchCartData()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item')
    }
    finally {
      setRemovingItemId(null);
    }
  }

  const handleApplyCoupon = () => {
    // Implement coupon logic here
  }

  if (isLoading) return <Loader />

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error || 'Unable to load cart data'}</p>
        <Button
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Try Again
        </Button>
      </motion.div>
    )
  }

  if (cartData?.data.length == 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <ShoppingCart className="h-16 w-16 text-gray-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet.</p>
        <Button
          onClick={() => router.push("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Start Shopping
        </Button>
      </motion.div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-3xl font-extrabold text-gray-900 flex items-center mb-8">
          <ShoppingBag className="w-8 h-8 mr-2 text-purple-600" />
          Your Stylish Cart
        </h1>

        {cartData && cartData.data && cartData.data.length > 0 ? (
          <AnimatePresence>
            {cartData.data.map((item: CartItem) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4 border-b border-gray-200 py-4"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-purple-600 font-semibold">₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <Button
                      onClick={() => {
                        const newQuantity = Math.max(0, item.quantity - 1)
                        setCartData((prevData: any) => ({
                          ...prevData,
                          data: prevData.data.map((cartItem: any) =>
                            cartItem.productId === item.productId ? { ...cartItem, quantity: newQuantity } : cartItem
                          )
                        }))
                        handleQuantityChange(item.productId, newQuantity, item.size, item.price)
                      }}
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2 text-gray-700">{item.quantity}</span>
                    <Button
                      onClick={() => {
                        const newQuantity = item.quantity + 1
                        setCartData((prevData: any) => ({
                          ...prevData,
                          data: prevData.data.map((cartItem: any) =>
                            cartItem.productId === item.productId ? { ...cartItem, quantity: newQuantity } : cartItem
                          )
                        }))
                        handleQuantityChange(item.productId, newQuantity, item.size, item.price)
                      }}
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleRemoveItem(item.productId)}
                  variant="outline"
                  className="flex items-center space-x-1 hover:scale-110 hover:bg-white text-red-900 hover:text-red-700 transition duration-300"
                  disabled={removingItemId === item.productId}
                >
                  {removingItemId === item.productId ? (
                    <LucideLoader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  <span>Remove</span>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 my-8"
          >
            Your cart is empty. Let's add some fabulous items!
          </motion.p>
        )}

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-900">Subtotal</span>
            <span className="text-2xl font-bold text-purple-600">₹{parseFloat(cartData?.totalPrice?.toString() || '0').toFixed(2)}</span>
          </div>

          <div className="space-y-4">
            {/* <div>
              <Label htmlFor="coupon" className="block text-sm font-medium text-gray-700">
                Coupon Code
              </Label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <Input
                  type="text"
                  name="coupon"
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300"
                  placeholder="Enter coupon code"
                />
                <Button
                  onClick={handleApplyCoupon}
                  className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Apply
                </Button>
              </div>
            </div> */}

            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              onClick={() => {
                setIsLoading(true);
                router.push('/checkout')
              }}
              disabled={isLoading || !cartData || cartData.data.length === 0}
            >
              {isLoading ? (
                <LucideLoader className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}