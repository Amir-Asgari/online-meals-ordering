// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import classes from './HiddenHeader.module.css';
// import Branches from './Branches';
// import AboutUs from './AboutUs';

// // const Page1Component = () => <h1>محتوای صفحه 1</h1>;
// // const Page2 = () => <h1>محتوای صفحه 2</h1>;
// // const Page3 = () => <h1>محتوای صفحه 3</h1>;

// const HiddenHeader = () => {
//     //     return (
//     //         <div class={classes.header}>
//     //             <button class="header-button">Home</button>
//     //             <button class="header-button">About Us</button>
//     //             <button class="header-button"> Branches</button>
//     //         </div>
//     //     )
//     // }
//     return (
//         <Router>
//             <div className={classes.header}>
//                 {/* <li><Link to="/page1">صفحه 1</Link></li> */}
//                 <li> <Link to="/page2">صفحه 2</Link></li>
//                 <li><Link to="/page3">صفحه 3</Link></li>

//                 <Routes>
//                     {/* <Route exact path="/page1" component={Page1Component} /> */}
//                     <Route exact path="/page2" component={<Branches/>} />
//                     <Route exact path="/page3" component={<AboutUs/>} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default HiddenHeader