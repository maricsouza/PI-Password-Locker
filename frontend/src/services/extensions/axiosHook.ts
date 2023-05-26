// "use client";

// import { api } from "./axios";
// import { getSession } from "next-auth/react";
// import { useEffect } from "react";

// const useAxiosAuth = () => {
//     useEffect(() => {
//     const requestIntercept = api.interceptors.request.use(
//       async (config) => {
//         const session = await getSession()
//         console.log(session)
//         if (!config.headers["token"]) {
//           config.headers["token"] = `${session?.user?.token}`;
//         }

//         if (!config.headers["idUser"]) {
//             config.headers["idUser"] = `${session?.user?.idUser}`;
//         }

//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseIntercept = api.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       api.interceptors.request.eject(requestIntercept);
//       api.interceptors.response.eject(responseIntercept);
//     };
//   }, [session]);

//   return api;
// };

// export default useAxiosAuth;