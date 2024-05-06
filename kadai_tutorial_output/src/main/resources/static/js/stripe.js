const stripe = Stripe('pk_test_51PBo8u2LAh1iNiC7W5bAmPKjuB9V0wH5UldYfYIImdKHYm01ERYsEshj2aOnBKLv0ZfRqYXDSE33vlsFuTEeHCXY00kQdp7u3L');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });