'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Truck, CreditCard, Check, ChevronRight } from 'lucide-react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AnimatedCheckout() {
    const [activeTab, setActiveTab] = useState('products')
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India',
    })
    const [couponCode, setCouponCode] = useState('')
    const userId = Cookies.get('userId');
    const [products, setProducts] = useState<any>([])
    const [user, setUser] = useState<any>({})
    const router = useRouter();

    const handleNextStep = () => {
        if (activeTab === 'products') setActiveTab('address')
        else if (activeTab === 'address') setActiveTab('payment')
    }

    const handlePreviousStep = () => {
        if (activeTab === 'payment') setActiveTab('address')
        else if (activeTab === 'address') setActiveTab('products')
    }

    const handlePlaceOrder = () => {
        // Implement order placement logic here
        console.log('Order placed!')
    }

    const fetchAllRequiredData = async () => {
        if (!userId) {
            router.push('/login');
        };
        //fetch All products
        const response = await fetch(`/api/cart/${userId}`).then((res) => res.json());
        if (response.success) {
            if (response.data.length === 0) {
                router.push('/cart');
            }
            setProducts(response);
        }
        else {
            console.error(response.error);
        }
        //fetch address
        const response2 = await fetch(`/api/user/get/${userId}`).then((res) => res.json());
        if(response2.success) {
            setUser(response2.data);
            setAddress(response2.data.address);
        }
        //fetch payment

    };

    useEffect(() => {
        fetchAllRequiredData();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-red-100">
                    <TabsTrigger value="products" className="data-[state=active]:bg-red-200">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Products
                    </TabsTrigger>
                    <TabsTrigger value="address" className="data-[state=active]:bg-red-200">
                        <Truck className="w-5 h-5 mr-2" />
                        Address
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="data-[state=active]:bg-red-200">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Payment
                    </TabsTrigger>
                </TabsList>
                <div className="p-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <TabsContent value="products">
                                <h2 className="text-2xl font-bold mb-4 text-red-800">Your Products</h2>
                                <AnimatePresence>
                                    {products.data?.map((item: any) => (
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
                                                <p className="text-purple-600 font-semibold">Price: ₹{item.price} X {item.quantity}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                    <p className="text-lg font-semibold text-gray-900">Total Payable Amount: ₹{products.totalPrice}</p>
                                </AnimatePresence>
                            </TabsContent>
                            <TabsContent value="address">
                                <h2 className="text-2xl font-bold mb-4 text-red-800">Delivery Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            id="Street"
                                            value={address.street ?? ""}
                                            onChange={(e) => setAddress({ ...address, street: e.target.value })}
                                            placeholder="Enter your full address"
                                            className="mt-1"
                                        />
                                        <Label htmlFor="city">City</Label>
                                        <Input
                                            id="city"
                                            value={address.city ?? ""}
                                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                            placeholder="Enter your city"
                                            className="mt-1"
                                        />
                                        <Label htmlFor="state">State</Label>
                                        <Input
                                            id="state"
                                            value={address.state ?? ""}
                                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                            placeholder="Enter your state"
                                            className="mt-1"
                                        />
                                        <Label htmlFor="pincode">Pincode</Label>
                                        <Input
                                            id="pincode"
                                            value={address.zipCode ?? ""}
                                            onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                                            placeholder="Enter your pincode"
                                            className="mt-1"
                                        />
                                        <Label htmlFor="country">Country</Label>
                                        <Input
                                            id="country"
                                            value={address.country ?? ""}
                                            onChange={(e) => setAddress({ ...address, country: e.target.value })}
                                            placeholder="Enter your country"
                                            className="mt-1"
                                        />
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            value={user.phone ?? ""}
                                            placeholder="Enter your phone number"
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="payment">
                                <h2 className="text-2xl font-bold mb-4 text-red-800">Payment Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="cardNumber">Card Number</Label>
                                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <Label htmlFor="expiryDate">Expiry Date</Label>
                                            <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                                        </div>
                                        <div className="flex-1">
                                            <Label htmlFor="cvv">CVV</Label>
                                            <Input id="cvv" placeholder="123" className="mt-1" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="couponCode">Coupon Code</Label>
                                        <div className="flex mt-1">
                                            <Input
                                                id="couponCode"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                placeholder="Enter coupon code"
                                                className="flex-grow"
                                            />
                                            <Button variant="outline" className="ml-2">Apply</Button>
                                        </div>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-md">
                                        <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
                                        <div className="flex justify-between">
                                            <span>Subtotal:</span>
                                            <span>₹{products.totalPrice}</span>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span>Shipping:</span>
                                            <span>₹99</span>
                                        </div>
                                        <div className="flex justify-between mt-2 font-bold">
                                            <span>Total:</span>
                                            <span>₹{products.totalPrice + 99}</span>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </motion.div>
                    </AnimatePresence>
                    <div className="mt-6 flex justify-between">
                        {activeTab !== 'products' && (
                            <Button onClick={handlePreviousStep} variant="outline">
                                Previous
                            </Button>
                        )}
                        {activeTab !== 'payment' ? (
                            <Button onClick={handleNextStep} className="ml-auto">
                                Next <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={handlePlaceOrder} className="ml-auto bg-red-700 hover:bg-red-800">
                                Place Order <Check className="w-4 h-4 ml-2" />
                            </Button>
                        )}
                    </div>
                </div>
            </Tabs>
        </motion.div>
    )
}