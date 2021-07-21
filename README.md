About the Coupon Managing System project:
  The project imitates platform for selling and buying coupons and consists of servlet MySQL server deployed on Heroku and a single-page web-site deployed on Netlify. Authentication implemented through JWT token.

Technologies used: 
  Java, TypeScript, CSS, HTML.
  Spring Boot, Spring JPA, Spring Web, Spring Security.
  React.js, Redux-Toolkit, React-Router, React-Query, Axios.
  
User can have 4 different roles: Administrator, Company, Customer and Guest:
  In a nutshell, Customer can buy coupons that were issued by Companies. Admin can manage Users but not coupons, Guest can logIn or register. There are one embedded profile for each role with login information in the bottom of the screen, so you can try all their functionalities.
           
DB structure:
