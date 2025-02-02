'use client'

declare global {
    interface Window {
        Razorpay: any;
    }
}

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Truck, CreditCard, Check, ChevronRight, LucideLoader } from 'lucide-react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Loader from '@/components/Loader'
import EnhancedInvoiceComponent from '@/components/invoice';
import toast, { Toaster } from 'react-hot-toast';

const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AnimatedCheckout() {
    const [openInvoice, setOpenInvoice] = useState(false);
    const [activeTab, setActiveTab] = useState<string>('products')
    const [paymentMethod, setPaymentMethod] = useState<string>('cod');
    const [couponValue, setCouponValue] = useState<number>(0)
    const [orderNotes, setOrderNotes] = useState('')
    const [urgent, setUrgent] = useState<boolean>(false)
    const [spinner, setSpinner] = useState<string>("");
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India',
    })
    const [paymentStatus, setPaymentStatus] = useState<'pending' | 'completed' | 'failed' | 'refunded'>('pending')
    const [couponCode, setCouponCode] = useState<string>('')
    const userId = Cookies.get('userId');
    const [products, setProducts] = useState<any>([])
    const [user, setUser] = useState<any>({})
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleNextStep = () => {
        if (activeTab === 'products') setActiveTab('address')
        else if (activeTab === 'address') setActiveTab('payment')
    }

    const handlePreviousStep = () => {
        if (activeTab === 'payment') setActiveTab('address')
        else if (activeTab === 'address') setActiveTab('products')
    }

    const handlePlaceOrder = async () => {
        setSpinner("order");
        const orderBody = {
            userId: userId,
            products: products.data,
            totalPrice: parseFloat((products.totalPrice + 99 + parseFloat(((products.totalPrice) * 0.18).toString()) - couponValue + (urgent ? 100 : 0)).toFixed(2)),
            shippingAddress: {
                street: address.street,
                city: address.city,
                state: address.state,
                zipCode: address.zipCode,
                country: address.country
            },
            paymentMethod: paymentMethod ?? "pending",
            paymentStatus: paymentStatus,
            orderNotes: orderNotes,
            urgent: urgent,
            shippingDetails: {
                carrier: "FedEx",
                trackingNumber: Math.floor(100000000 + Math.random() * 900000000).toString(),
                estimatedDeliveryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            }
        }
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderBody)
            }).then((res) => res.json());
            if (response.success) {
                setOpenInvoice(true);
                toast.success("order placed successfully!")
            }
            else {
                toast.error("failed to place order!")
            }
        }
        catch (error) {
            toast.error("we are having issue to perform this task!")
        }
        finally {
            setSpinner("");
        }

    }

    const fetchAllRequiredData = async () => {
        setIsLoading(true);
        if (!userId) {
            router.push('/login');
        };
        try {

            //fetch All products
            const response = await fetch(`/api/cart/${userId}`).then((res) => res.json());
            if (response.success) {
                if (response.data.length === 0) {
                    router.push('/cart');
                }
                setProducts(response);
            }
            else {
                toast.error("Failed to fetch data. Please try again later.")
                setIsLoading(false);
            }
            //fetch address
            const response2 = await fetch(`/api/user/get/${userId}`).then((res) => res.json());
            if (response2.success) {
                setUser(response2.data);
                setAddress(response2.data.address);
            }
        }
        catch (error) {
            toast.error("Failed to fetch data. Please try again later.")
        }
        finally {
            setIsLoading(false);
        }
    };

    const demoInvoiceDetails = {
        invoiceNumber: "INV-20250123",
        date: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        customerName: user.username,
        customerEmail: user.email,
        customerPhone: user.phone,
        customerAddress: `${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.zipCode}`,
        items: products?.data,
        subtotal: products.totalPrice,
        cgst: (products.totalPrice) * 0.09,
        sgst: (products.totalPrice) * 0.09,
        shipping: 0,
        total: parseFloat((products.totalPrice + 99 + parseFloat(((products.totalPrice) * 0.18).toString()) - couponValue + (urgent ? 100 : 0)).toFixed(2)),
        paymentTerms: "Payment due within 5 days of the invoice date.",
        notes: "Thank you for shopping with Rajwadi Poshak! Please contact us for any queries.",
    };

    const demoCompanyDetails = {
        name: "Rajwadi Poshak",
        address: "456 Bazaar Street, Jaipur, Rajasthan, India",
        gstin: "27AABCU9603R1ZL",
        email: "support@rajwadiposhak.com",
        phone: "+91-1122334477",
        website: "www.rajwadiposhak.com",
    };


    const generateOrder = async () => {
        setSpinner("payment");
        try {
            const orderUrl = `/api/payment/orders`;
            const response = await fetch(orderUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        amount: parseFloat((products.totalPrice + 99 + parseFloat(((products.totalPrice) * 0.18).toString()) - couponValue + (urgent ? 100 : 0)).toFixed(2))
                    }
                )
            }).then((res) => res.json());

            if (response.success) {
                initPayment(response.data);
            }
        } catch (error) {
            toast.error("Sorry! Error while doing payment!")
        }
        finally {
            setSpinner("");
        }
    }

    const initPayment = (data: any) => {
        const options: any = {
            key: "rzp_test_EfZ5xkx1ssjM7g",
            amount: 1000,
            currency: data.currency,
            name: "Rajwadi Poshak",
            description: "Pay securely to rajwadi poshak",
            image: "R",
            modal: {
                ondismiss: function () {
                    toast.error("Payment was dismissed!")
                }
            },
            order_id: data.id,
            handler: async (response: any) => {
                try {
                    const verifyUrl = `/api/payment/verify`;
                    const resp = await fetch(verifyUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(response)
                    }).then((res) => res.json());

                    if (resp.success) {
                        setPaymentStatus("completed")
                        setPaymentMethod("bank_transfer");
                        toast.success("Payment successfully!")
                        return true;
                    }
                    else {
                        setPaymentStatus("failed")
                        toast.error("Payment failed!")
                        return false;
                    }

                } catch (error) {
                    setPaymentStatus("failed")
                    toast.error("Payment failed!")
                    return false;
                }
            },
            theme: {
                color: "#3469c1",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handleApplyCoupon = async () => {
        setSpinner("coupon")
        if (!couponCode) {
            toast.error("Please enter the coupon code first!");
            setSpinner("")
            return;
        }

        try {
            const response = await fetch(`/api/coupon/${couponCode}`);
            const data = await response.json();

            if (response.ok && data.success) {
                const coupon = data.data;
                const initialTotalPrice = products.totalPrice;

                let discountAmount = 0;

                if (coupon.discountType === 'percentage') {
                    discountAmount = (initialTotalPrice * coupon.discountValue) / 100;
                    // Apply max discount amount if specified
                    if (coupon.maxDiscountAmount && discountAmount > coupon.maxDiscountAmount) {
                        discountAmount = coupon.maxDiscountAmount;
                    }
                } else if (coupon.discountType === 'fixed') {
                    discountAmount = coupon.discountValue;
                }

                // Ensure discount doesn't exceed the initial total price
                if (discountAmount > initialTotalPrice) {
                    discountAmount = initialTotalPrice;
                }

                // Calculate the final payable amount after applying the discount
                const finalPayableAmount = discountAmount;

                // Update the state with the discounted price
                setCouponValue(finalPayableAmount);
                toast.success("Coupon applied successfully!");
            } else {
                toast.error(data.error || "Failed to apply coupon code.");
            }
        } catch (error) {
            console.error("Error applying coupon:", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
        finally {
            setSpinner("");
        }
    };


    useEffect(() => {

        fetchAllRequiredData();
    }, []);

    if (isLoading) {
        return <>
            <Loader />
        </>
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        >
            <Toaster position="top-right" />
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
                                            className="flex items-center mb-2 space-x-4 border-b border-gray-200 py-4"
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
                                            disabled
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="payment">
                                <h2 className="text-2xl font-bold mb-4 text-red-800">Payment Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <Label className="text-lg font-semibold">Select Payment Method</Label>
                                        <div className="mt-2 space-y-2">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="bank_transfer"
                                                    checked={paymentMethod === 'bank_transfer'}
                                                    onChange={() => setPaymentMethod('bank_transfer')}
                                                    className="form-radio text-red-600"
                                                    disabled={paymentStatus === 'completed'}
                                                />
                                                <span>Razorpay</span>
                                            </label>
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cod"
                                                    checked={paymentMethod === 'cod'}
                                                    onChange={() => setPaymentMethod('cod')}
                                                    className="form-radio text-red-600"
                                                    disabled={paymentStatus === 'completed'}
                                                />
                                                <span>Cash on Delivery</span>
                                            </label>
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {paymentMethod === 'bank_transfer' && (
                                            <motion.div
                                                key="bank_transfer"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Button onClick={generateOrder} className='text-white'
                                                    disabled={paymentStatus === "completed"}>
                                                    {spinner == "payment" ? (
                                                        <LucideLoader className="w-4 h-4 animate-spin" />
                                                    ) : (
                                                        paymentStatus === "completed" ? "Paid" : "Pay Online"
                                                    )}
                                                </Button>
                                            </motion.div>
                                        )}

                                        {paymentMethod === 'cod' && (
                                            <motion.div
                                                key="cod"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-sm text-gray-600">
                                                    Pay with cash upon delivery. Additional fees may apply.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <div className="flex items-center mt-4">
                                        <input
                                            type="checkbox"
                                            id="urgent"
                                            checked={urgent}
                                            onChange={(e) => setUrgent(e.target.checked)}
                                            className="form-checkbox text-red-600"
                                            disabled={paymentStatus=="completed"}
                                        />
                                        <Label htmlFor="urgent" className="ml-2">Urgent Delivery (Additional charges may apply)</Label>
                                    </div>
                                    <div>
                                        <Label htmlFor="couponCode">Coupon Code</Label>
                                        <p className="text-xs text-red-600 mt-2 ml-1 font-semibold">Try DEAL25</p>
                                        <div className="flex mt-1">
                                            <Input
                                                id="couponCode"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                placeholder="Enter coupon code"
                                                className="flex-grow"
                                                disabled={couponValue > 0 ? true : false}
                                            />
                                            <Button variant="outline" className="ml-2 text-black hover:text-white" onClick={handleApplyCoupon} disabled={couponValue > 0 ? true : false}>
                                                {spinner == "coupon" ?
                                                    <LucideLoader className="w-4 h-4 animate-spin" /> : <>
                                                        Apply
                                                    </>
                                                }
                                            </Button>
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
                                            <span>+ ₹99</span>
                                        </div>
                                        {couponValue > 0 &&
                                            <div className="flex justify-between mt-2">
                                                <span>Coupon:</span>
                                                <span>- ₹{couponValue}</span>
                                            </div>}
                                        <div className="flex justify-between mt-2">
                                            <span>CGST (9%):</span>
                                            <span>+ ₹{((products.totalPrice) * 0.09).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span>SGST (9%):</span>
                                            <span>+ ₹{((products.totalPrice) * 0.09).toFixed(2)}</span>
                                        </div>
                                        {urgent && <div className="flex justify-between mt-2">
                                            <span>Urgent Delivery Charges:</span>
                                            <span>+ ₹100</span>
                                        </div>}
                                        <div className="flex justify-between mt-2 font-bold">
                                            <span>Total:</span>
                                            <span>
                                                ₹

                                                {paymentStatus == "completed" ? 0 : (((products.totalPrice + 99 + parseFloat(((products.totalPrice) * 0.18).toString()) - couponValue + (urgent ? 100 : 0)))
                                                ).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="orderNotes">Order Notes</Label>
                                        <Input
                                            id="orderNotes"
                                            value={orderNotes}
                                            onChange={(e) => { setOrderNotes(e.target.value) }}
                                            placeholder="Enter any special instructions (max 200 characters)"
                                            maxLength={200}
                                            className="mt-1"
                                        />
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
                            <Button onClick={handleNextStep} className="ml-auto text-white">
                                Next <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={handlePlaceOrder} className="ml-auto bg-green-700 hover:bg-green-800 text-white">
                                {spinner == "order" ?
                                    <LucideLoader className="w-4 h-4 animate-spin" /> : <>
                                        Place Order <Check className="w-4 h-4 ml-2" />
                                    </>
                                }
                            </Button>
                        )}
                    </div>
                </div>
            </Tabs>
            {openInvoice &&
                <EnhancedInvoiceComponent
                    isOpen={true}
                    onClose={() => {
                        setIsLoading(true);
                        router.push("/");
                    }}
                    invoiceDetails={demoInvoiceDetails}
                    companyDetails={demoCompanyDetails}
                />}

        </motion.div>
    )
}