// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom"
// import { privateRoutes } from "../Routes/routes";
// import { publicRoutes } from "../Routes/routes";

// const AppRouter = () => {
//     const user = false
//     return user ?
//         (
//             <Routes>
//                 {privateRoutes.map(({ path, Component }) =>
//                     <Route path={path} component={Component} exact={true} />
//                 )}
//                 <Navigate to ="/chat"/>
//                 {/* component={Component ? Component : <Navigate replace to ="/chat"/>} */}
//             </Routes>
            
//         )
//         :
//         (
//             <Routes>
//                 {publicRoutes.map(({ path, Component }) =>
//                     <Route path={path} component={Component} exact={true} />
//                 )}
//                 {/* <Navigate to ="/login"/> */}
//                 {/* component={Component ? Component : <Navigate replace to ="/login"/>} */}
//             </Routes>
//         )
// }
// export default AppRouter;