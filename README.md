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

    Add this to catagory of navabar
    https://ui.aceternity.com/components/parallax-scroll
    
    Shipping and Delivery
    https://www.flaticon.com/free-animated-icons/shipping-and-delivery

    Add that to hero section
    https://ui.aceternity.com/components/github-globe

    Add this to last of the website
    https://ui.aceternity.com/components/infinite-moving-cards
    https://ui.aceternity.com/components/link-preview

    Add this product grid.
    https://ui.aceternity.com/components/layout-grid

    File Upload system
    https://ui.aceternity.com/components/file-upload

    Line chart
    https://getjustd.com/docs/2.x/components/charts/line-chart


// Filter with
short kurtas
Anarkali Suits
Kurta Sets
Orignal Handblocks Suit Set


<!-- todo: In assests one screen shot show that ss and add that all products in that footer section-->
<!-- todo: Make username api and find that all username and make that api -->
<!-- todo: Add that state api and make that looks like that -->

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






<!-- TODO: Fix that all spacing things that is not working proper -->





TODO TASKK:

Create checkout page.
Badges for product [best-seller, new arrivals]
payment
Sell
Admin Panel
Order Confirm page
Admin Panel:https://cloud.uibakery.io/dev/focus-group-wiz-kid/lPpOhWcf7H/home


Grid:-
https://tailwindui.com/components/marketing/sections/bento-grids




Update that products and render that all in corosal 

Make that third page that is not complete
https://ui.aceternity.com/components/container-scroll-animation
https://ui.aceternity.com/components/file-upload
https://ui.aceternity.com/components/infinite-moving-cards
https://ui.aceternity.com/components/layout-grid
https://ui.aceternity.com/components/sticky-scroll-reveal




https://mui.com/material-ui/react-badge/
https://www.heroui.com/docs/components/badge

Make one file upload page ..



<!-- TODO: Add one thing in admin panel  -->

Add input box to admin panel
    That name is came to here
    Show that product to top


<!-- Todo: Update Data collection with sale products -->
<!-- todo Update data Collection with catagory products -->
<!-- todo: Or else udpate that with quality -->