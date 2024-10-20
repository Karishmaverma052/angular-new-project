// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { Router } from 'express';
// import { jwtDecode } from 'jwt-decode';

// export const tokensInterceptor: HttpInterceptorFn = (req, next) => {
//   let router = inject(Router);
//   const tokens = localStorage.getItem('tokens');

//   if(tokens){
//     let decodeToken = jwtDecode(tokens)
//     const isExpired = decodeToken && decodeToken.exp ?
//      decodeToken.exp< Date.now()/1000
//     : false;

//     if(isExpired) {
//       console.log('token expired');
//       localStorage.removeItem('token');
//       router.navigateByUrl('/login');
//     }else{
//       console.log('token not expired');
//     }
    
//     }
    
//   return next(req);
// };
import { HttpInterceptorFn } from '@angular/common/http';

export const tokensInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if window or localStorage is available
  let token: string | null = null;

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    token = localStorage.getItem('authToken'); // Retrieve token if in the browser
  }

  // Clone the request and add the Authorization header if token exists
  const tokenizedReq = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  return next(tokenizedReq);
};
