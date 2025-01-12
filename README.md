New Feautures

-- 1. Add Ai for show product according to user's choice.
-- 2. Use Api for show map

apis- /

Frontend End Points
/login
/register

UI Changes

    Hero Section
    https://ui.aceternity.com/components/background-lines
    https://ui.aceternity.com/components/container-cover

    Photo Compare
    https://ui.aceternity.com/components/compare

    File Upload Component
    https://ui.aceternity.com/components/file-upload

    Product Hover
    https://ui.aceternity.com/components/following-pointer

    Typing Effect
    https://ui.aceternity.com/components/typewriter-effect

    Shipping and Delivery
    https://www.flaticon.com/free-animated-icons/shipping-and-delivery

    Add that to hero section
    https://ui.aceternity.com/components/github-globe

// Filter with
short kurtas
Anarkali Suits
Kurta Sets
Orignal Handblocks Suit Set


<!-- todo: In assests one screen shot show that ss and add that all products in that footer section-->
<!-- todo: Make username api and find that all username and make that api -->

localhost:3000/api/auth/login

responsive product grid is not working....

-- Backend Apis
http://localhost:3000/api/user/signup
http://localhost:3000/api/user/udpate
http://localhost:3000/api/user/login
http://localhost:3000/api/user/delete => userId,(jwt in header) =>return (status,message,user)
http://localhost:3000/api/user/sendotp => email =>return (status,message)
http://localhost:3000/api/user/verifyotp => email,otp =>return (status,message,status)

****************************************************************************************
FOR OTP :
----------------------------------------------------------------------------------------
to send otp : http://localhost:3000/api/user/sendotp => body : {email}
----------------------------------------------------------------------------------------
to verify otp : http://localhost:3000/api/user/verify => body : {otp as string}

****************************************************************************************
FOR Order : 
----------------------------------------------------------------------------------------
to make new order : http://localhost:3000/api/order => method:POST, body : {body}
----------------------------------------------------------------------------------------
to update the order : http://localhost:3000/api/order/orderId =>methos: PUT, body : {payment_status, status, shippingAddress} .........this 3 field can be only change
----------------------------------------------------------------------------------------


****************************************************************************************
FOR WishList : 
----------------------------------------------------------------------------------------
to make new wishlist : http://localhost:3000/api/whishlist => method:POST, body : {productId, userId}
----------------------------------------------------------------------------------------
to get perticular user's wishlist : http://localhost:3000/api/whishlist/userId => method:GET
----------------------------------------------------------------------------------------
to get delete the product : http://localhost:3000/api/whishlist/userId => method:DELETE, body : {productId}


****************************************************************************************
FOR REVIEW : 
----------------------------------------------------------------------------------------
to make a new review : http://localhost:3000/api/review => method:POST, body : {productId, userId, rating, comment(optional)}
----------------------------------------------------------------------------------------
to get review for perticular user's on product : http://localhost:3000/api/review/user/userId => method:POST, body : {productId}
----------------------------------------------------------------------------------------
to get a total review and average of rating per product : http://localhost:3000/api/review/product/productId => method: GET
----------------------------------------------------------------------------------------
to get all review of product with username and its rating (for display review page in frontend only) : http://localhost:3000/api/review/productId => method:GET
----------------------------------------------------------------------------------------