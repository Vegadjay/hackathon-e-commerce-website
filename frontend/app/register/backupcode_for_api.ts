'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRenderContext } from '@/contexts/RenderContext';
import { CheckCircle2, XCircle, Send, ChevronDown } from 'lucide-react';

// Animation variants
const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
};

const errorVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, height: 0 }
};

// Types
interface LocationData {
    name: string;
    iso2: string;
}

interface FormData {
    username: string;
    email: string;
    otp: string;
    password: string;
    phone: string;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
}

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
}

interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{ value: string; label: string }>;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

// Components
const SelectField: React.FC<SelectFieldProps> = ({
    label,
    name,
    value,
    onChange,
    options,
    error,
    required = true,
    disabled = false,
    loading = false
}) => (
    <div className= "relative" >
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor = { name } >
        { label } { required && <span className="text-red-500" >* </span> }
</label>
    < div className = "relative" >
        <select
        name={ name }
id = { name }
value = { value }
onChange = { onChange }
disabled = { disabled || loading}
className = {`w-full px-4 py-2 border-2 rounded-lg outline-none appearance-none transition-colors
          ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          ${loading ? 'bg-gray-50' : ''}
        `}
      >
    <option value="" > Select { label } </option>
{
    options.map((option) => (
        <option key= { option.value } value = { option.value } >
        { option.label }
        </option>
    ))
}
</select>
{
    loading ? (
        <motion.div
          animate= {{ rotate: 360 }
}
transition = {{ duration: 1, repeat: Infinity, ease: "linear" }}
className = "absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"
    />
      ) : (
    <ChevronDown className= "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      )}
</div>
    <AnimatePresence>
{
    error && (
        <motion.p
          variants={ errorVariants }
    initial = "initial"
    animate = "animate"
    exit = "exit"
    className = "absolute -bottom-6 left-0 text-sm text-red-500"
        >
        { error }
        </motion.p>
      )
}
</AnimatePresence>
    </div>
);

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    required = true,
    disabled = false
}) => (
    <motion.div className= "relative" >
    <motion.label
      className="block text-sm font-medium text-gray-700 mb-1"
htmlFor = { name }
    >
    { label } { required && <span className="text-red-500" >* </span> }
</motion.label>
    < motion.input
variants = { inputVariants }
whileFocus = "focus"
initial = "blur"
animate = "blur"
type = { type }
name = { name }
id = { name }
value = { value }
onChange = { onChange }
placeholder = { placeholder }
disabled = { disabled }
className = {`w-full px-4 py-2 border-2 rounded-lg outline-none transition-colors
        ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}
        ${error ? 'focus:border-red-500' : 'focus:border-blue-500'}
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
      `}
    />
    <AnimatePresence>
{
    error && (
        <motion.p
          variants={ errorVariants }
    initial = "initial"
    animate = "animate"
    exit = "exit"
    className = "absolute -bottom-6 left-0 text-sm text-red-500"
        >
        { error }
        </motion.p>
      )
}
</AnimatePresence>
    </motion.div>
);

// Main Component
export default function Register() {
    const { triggerRender } = useRenderContext();
    const router = useRouter();

    // State
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        otp: '',
        password: '',
        phone: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
        },
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [isSendingOtp, setIsSendingOtp] = useState(false);

    // Location data states
    const [countries, setCountries] = useState<LocationData[]>([]);
    const [states, setStates] = useState<LocationData[]>([]);
    const [cities, setCities] = useState<{ name: string }[]>([]);
    const [loadingStates, setLoadingStates] = useState(false);
    const [loadingCities, setLoadingCities] = useState(false);

    // API Key
    const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key from countrystatecity.in

    // Fetch countries on component mount
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://api.countrystatecity.in/v1/countries', {
                    headers: {
                        'X-CSCAPI-KEY': API_KEY
                    }
                });
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
                toast.error('Failed to load countries');
            }
        };
        fetchCountries();
    }, []);

    // Fetch states when country changes
    const fetchStates = async (countryCode: string) => {
        if (!countryCode) return;
        setLoadingStates(true);
        try {
            const response = await fetch(
                `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
                {
                    headers: {
                        'X-CSCAPI-KEY': API_KEY
                    }
                }
            );
            const data = await response.json();
            setStates(data);
            setFormData(prev => ({
                ...prev,
                address: { ...prev.address, state: '', city: '' }
            }));
            setCities([]);
        } catch (error) {
            console.error('Error fetching states:', error);
            toast.error('Failed to load states');
        } finally {
            setLoadingStates(false);
        }
    };

    // Fetch cities when state changes
    const fetchCities = async (countryCode: string, stateCode: string) => {
        if (!countryCode || !stateCode) return;
        setLoadingCities(true);
        try {
            const response = await fetch(
                `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
                {
                    headers: {
                        'X-CSCAPI-KEY': API_KEY
                    }
                }
            );
            const data = await response.json();
            setCities(data);
            setFormData(prev => ({
                ...prev,
                address: { ...prev.address, city: '' }
            }));
        } catch (error) {
            console.error('Error fetching cities:', error);
            toast.error('Failed to load cities');
        } finally {
            setLoadingCities(false);
        }
    };

    // Handle location select changes
    const handleLocationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            address: { ...prev.address, [name.split('.')[1]]: value }
        }));

        if (name === 'address.country') {
            const country = countries.find(c => c.name === value);
            if (country) {
                await fetchStates(country.iso2);
            }
        } else if (name === 'address.state') {
            const country = countries.find(c => c.name === formData.address.country);
            const state = states.find(s => s.name === value);
            if (country && state) {
                await fetchCities(country.iso2, state.iso2);
            }
        }
    };

    // Validation functions
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
            return false;
        }
        if (!emailRegex.test(formData.email)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
            return false;
        }
        return true;
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        // Username validation
        if (!formData.username) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        // OTP validation
        if (!isOtpVerified) {
            newErrors.otp = 'Email verification required';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Phone validation (optional)
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Address validation
        if (!formData.address.street) {
            newErrors.street = 'Street address is required';
        }
        if (!formData.address.country) {
            newErrors.country = 'Country is required';
        }
        if (!formData.address.state) {
            newErrors.state = 'State is required';
        }
        if (!formData.address.city) {
            newErrors.city = 'City is required';
        }
        if (!formData.address.zipCode) {
            newErrors.zipCode = 'ZIP code is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle OTP
    const handleSendOtp = async () => {
        if (!validateEmail()) return;

        setIsSendingOtp(true);
        try {
            const response = await fetch('/api/user/sendotp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email }),
            });

            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
            } else {
                setIsOtpSent(true);
                toast.success('OTP sent successfully!');
            }
        } catch (error) {
            toast.error('Failed to send OTP');
        } finally {
            setIsSendingOtp(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!formData.otp) {
            setErrors(prev => ({ ...prev, otp: 'Please enter OTP' }));
            return;
        }

        if (!/^\d{6}$/.test(formData.otp)) {
            setErrors(prev => ({ ...prev, otp: 'OTP must be a 6-digit number' }));
            return;
        }

        setIsVerifyingOtp(true);
        try {
            const response = await fetch('/api/user/verifyotp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp: formData.otp }),
                credentials: 'include'
            });

            const data = await response.json();

            if (data.success) {
                setIsOtpVerified(true);
                toast.success(data.message || 'OTP verified successfully');
            } else {
                setIsOtpVerified(false);
                toast.error(data.message || 'Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setIsOtpVerified(false);
            toast.error('Failed to verify OTP');
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isOtpVerified) {
            toast.error('Please verify your email first');
            return;
        }

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success('Registration successful!');
                location.reload();
                setTimeout(() => {
                    triggerRender();
                }, 1000);
            }
        } catch (error) {
            toast.error('An error occurred during registration');
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.') as [keyof typeof formData, string];
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...(typeof prev[parent] === 'object' ? prev[parent] : {}),
                    [child]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className= "min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50" >
        <motion.div
        initial="hidden"
    animate = "visible"
    variants = { formVariants }
    className = "max-w-4xl mx-auto"
        >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100" >
            <div className="px-8 py-12" >
                <motion.div
              initial={ { opacity: 0, y: -20 } }
    animate = {{ opacity: 1, y: 0 }
}
className = "text-center mb-12"
    >
    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" >
        Join Our Community
            </h2>
            < p className = "mt-4 text-gray-600" >
                Create your account and start your journey with us
                </p>
                </motion.div>

                < form onSubmit = { handleSubmit } className = "space-y-8" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" >
                        <InputField
                  label="Username"
name = "username"
type = "text"
placeholder = "johndoe"
value = { formData.username }
onChange = { handleInputChange }
error = { errors.username }
disabled = {!isOtpVerified}
                />

    < div className = "relative flex items-center gap-2" >
        <div className="flex-1" >
            <InputField
                      label="Email Address"
name = "email"
type = "email"
placeholder = "john@example.com"
value = { formData.email }
onChange = { handleInputChange }
error = { errors.email }
disabled = { isOtpVerified }
    />
    </div>
    < motion.button
type = "button"
onClick = { handleSendOtp }
disabled = { isSendingOtp || isOtpVerified}
className = "mt-6 h-10 w-10 p-2 bg-blue-500 text-white rounded-lg
hover: bg - blue - 600 disabled: bg - gray - 400 transition - colors
                      flex items - center justify - center"
    >
{
    isSendingOtp?(
                      <motion.div
                        animate={{ rotate: 360 }}
transition = {{ duration: 1, repeat: Infinity, ease: "linear" }}
className = "w-6 h-6 border-2 border-white border-t-transparent rounded-full"
    />
                    ) : (
    <Send className= "w-5 h-5" />
                    )}
</motion.button>
    </div>

{
    isOtpSent && (
        <div className="relative" >
            <InputField
                      label="Enter OTP"
    name = "otp"
    type = "text"
    placeholder = "Enter 6-digit OTP"
    value = { formData.otp }
    onChange = { handleInputChange }
    error = { errors.otp }
    disabled = { isOtpVerified }
        />
        <div className="absolute right-2 top-8 flex items-center space-x-2" >
            {
                isOtpVerified?(
                        <CheckCircle2 className = "w-6 h-6 text-green-500" />
                      ): (
                        <motion.button
                          type="button"
                          onClick={ handleVerifyOtp }
                          disabled={ isVerifyingOtp }
                          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm
                            hover: bg - green - 600 disabled: bg - gray - 400 transition- colors"
        >
        { isVerifyingOtp? 'Verifying...': 'Verify OTP' }
        </motion.button>
                      )
}
</div>
    </div>
                )}

<InputField
                  label="Password"
name = "password"
type = "password"
placeholder = "••••••••"
value = { formData.password }
onChange = { handleInputChange }
error = { errors.password }
disabled = {!isOtpVerified}
                />

    < InputField
label = "Phone Number"
name = "phone"
type = "tel"
placeholder = "+1 234 567 8900"
value = { formData.phone }
onChange = { handleInputChange }
error = { errors.phone }
required = { false}
disabled = {!isOtpVerified}
                />

    < div className = "md:col-span-2" >
        <h3 className="text-lg font-semibold text-gray-700 mb-4" > Address Information </h3>
            < div className = "grid grid-cols-1 md:grid-cols-2 gap-6" >
                <InputField
                      label="Street Address"
name = "address.street"
type = "text"
placeholder = "123 Main St"
value = { formData.address.street }
onChange = { handleInputChange }
error = { errors.street }
disabled = {!isOtpVerified}
                    />

    < SelectField
label = "Country"
name = "address.country"
value = { formData.address.country }
onChange = { handleLocationChange }
options = {
    countries.map(country => ({
        value: country.name,
        label: country.name
    }))
}
error = { errors.country }
disabled = {!isOtpVerified}
                    />

    < SelectField
label = "State"
name = "address.state"
value = { formData.address.state }
onChange = { handleLocationChange }
options = {
    states.map(state => ({
        value: state.name,
        label: state.name
    }))
}
error = { errors.state }
disabled = {!isOtpVerified || !formData.address.country}
loading = { loadingStates }
    />

    <SelectField
                      label="City"
name = "address.city"
value = { formData.address.city }
onChange = { handleLocationChange }
options = {
    cities.map(city => ({
        value: city.name,
        label: city.name
    }))
}
error = { errors.city }
disabled = {!isOtpVerified || !formData.address.state}
loading = { loadingCities }
    />

    <InputField
                      label="ZIP Code"
name = "address.zipCode"
type = "text"
placeholder = "10001"
value = { formData.address.zipCode }
onChange = { handleInputChange }
error = { errors.zipCode }
disabled = {!isOtpVerified}
                    />
    </div>
    </div>
    </div>

    < motion.div className = "space-y-4 pt-4" >
        <motion.button
                  whileHover={ { scale: 1.01 } }
whileTap = {{ scale: 0.99 }}
type = "submit"
disabled = { isLoading || !isOtpVerified}
className = "w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl 
font - medium transition - all shadow - lg hover: shadow - xl disabled: opacity - 70 disabled: cursor - not - allowed"
    >
{
    isLoading?(
                    <span className = "flex items-center justify-center" >
            <motion.span
                        animate={{ rotate: 360 }}
transition = {{ duration: 1, repeat: Infinity, ease: "linear" }}
className = "inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
    />
    Creating your account...
</span>
                  ) : (
    'Create Account'
)}
</motion.button>

    < p className = "text-center text-gray-600" >
        Already have an account ? { ' '}
            < Link href = "/login" className = "text-blue-600 hover:text-blue-700 font-medium" >
                Sign in
                </Link>
                </p>
                </motion.div>
                </form>
                </div>
                </div>
                </motion.div>
                < ToastContainer position = "bottom-right" autoClose = { 3000} />
                    </div>
  );
}