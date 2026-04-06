Crochet Corner :

  To run crochet corners backend you'll need to make an account with stripe to obtain a stripe public and secret key that would be in an .env file under STRIPE_SECRET_KEY  and STRIPE_PUBLISHABLE_KEY . They are refernceced in project settings and the checkout app views.py and should enable everything to work on the backend.

  For the front end when testing stripe checkout use the card number 4242 4242 4242 4242 with any expiration date and any cvc number. This is from stripe to test a sucesssful payment. Also when for login to the the seller page please use the username test@test.com with password as the password.

  This is an ecommerce app built with a React frontend , a Django backend and a Postgres database all 
  wrapped up in a docker network utilzling nginx to navigate browser traffic to the frontend and backend
  respectivley. While also utlizing gunicorn to ensure the backend maintains robustness under heavy request traffic.
    
  "Crochet Corner, is an intentional marketplace for 1-of-1 handmade gifts. We’re the antidote to 
  'fast fashion'; connecting conscious shoppers with small business owners through unique crochet pieces 
  you won't find anywhere else. Don't just buy a gift; buy the only one in existence."


Day 1 ish :
  I began with getting all my idead out onto virtual paper (tldraw) and then orginazed it with the fulllstack in mind.
  Creating ui wireframes, feature lists, user stories, model attrabutes and requests wireframes.
  After prioritizing what features could make it into the mvp that is due in 2.5 weeks I made tasks lists for each feature
  and began the fun part of tackling them.

Day 3 ish :
  I started with a fullstack skelton I orcestrated to make set up easier and more consistant and easily interchangbale depending on the project.
  after getting my docker network and my envirornment up to speed I started to work on the back end. The Item model was created first then the user.

Day 5 ish:
  Heavy research for the Stripe api was todays goal and after much confusion I begain to understand how I could use stripes embedded checkoutsessions 
  object and how to write it using django considering their docs example only account for working with flask. After much back and forth trying to also figure 
  out how to use my own product database when calling the checkoutsession I was off to te races. I ended the day being able to send
  a sucessful request to create a checkout session and return the client sercret that my front end will utilize to finalize payment with the stripe api.

  Day 7ish:
  backend is pretty much done , endpoints have been tested manually tested with postamn. Now I am writing test files for the app to ensure future testing is accurate and efficent. After testing I'll move to creating all utility functions that call the backend from the react app.

  Day 10ish:
  Having issues with rendering when state changes and also figuring out how to enable cors so my backend can acess stripe outside of my docker network. Allowing my backend to retrive order status and emails so my frontend can display order sucess or failure messages respectively  Also starting the process of creating a cypress test suite for my frontend.

  Day 14ish:
  wrote cypress tests for frontend and worked on fixing state rendering fixes. Also started to add a custom order feature starting by creating a model for it and an api endpoint to retrive and create order request. 








  
