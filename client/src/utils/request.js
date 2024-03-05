// // const BASE_URL = "http://localhost:4000"

// // export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
// //     let res
// //     let data
// //     switch (method) {
// //         case 'GET':
// //             res = await fetch(BASE_URL + url, { headers })
// //             data = await res.json()
// //             return data

// //         case 'POST':
// //             // if we send form data, it is not content-type:application/json,
// //             // hence the bonus param 
// //             if (isNotStringified) {
// //                 res = await fetch(BASE_URL + url, { headers, method, body })
// //                 data = await res.json()
// //             } else {
// //                 res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify({ ...body }) })
// //                 data = await res.json()
// //             }
// //             return data

// //         case 'PUT':
// //             res = await fetch(BASE_URL + url, { headers, method, body: JSON.stringify(body) })
// //             data = await res.json()
// //             return data

// //         case 'DELETE':
// //             res = await fetch(BASE_URL + url, { headers, method })
// //             data = await res.json()
// //             return data
// //         default:
// //             return
// //     }
// // }



// import axios from 'axios';

// const BASE_URL = "http://localhost:4000";

// export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
//     try {
//         let response;
//         switch (method) {
//             case 'GET':
//                 response = await axios.get(BASE_URL + url, { headers });
//                 return response.data;

//             case 'POST':
//                 response = await axios.post(BASE_URL + url, isNotStringified ? body : { ...body }, { headers });
//                 return response.data;

//             case 'PUT':
//                 response = await axios.put(BASE_URL + url, body, { headers });
//                 return response.data;

//             case 'DELETE':
//                 response = await axios.delete(BASE_URL + url, { headers });
//                 return response.data;

//             default:
//                 throw new Error(`Unsupported method: ${method}`);
//         }
//     } catch (error) {
//         // Handle errors here
//         console.error('Request error:', error);
//         throw error;
//     }
// };

