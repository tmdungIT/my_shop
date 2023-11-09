import React, { useState } from 'react';
import "./HomeAdmin.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard"
import Categories from "../Categories/Categories"
import Products from "../Products/Products"
import Orders from "../Orders/Orders"
import Users from "../Users/Users"
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
import dataArray1 from '../data/DataAdmin';


function HomeAdmin(props) {
   const [hidden, setHidden] = useState(false);
   const [clickedLinkID, setclickedLinkID] = useState(null);

   return (
      <BrowserRouter>
         <div className='container-fluid admin' >
            <div className='admin_left'>
               <div className='left_laptop'>
                  <h1 className={hidden ? '' : 'hid'}> Suff ADMIN</h1>
                  <h1 className={hidden ? 'hid' : ''}> S</h1>

                  <div className="icon" onClick={() => setHidden(!hidden)}>
                     <i class={`fa-solid fa-minus ${hidden ? '' : 'hid'}`}></i>
                     <i class={`fa-solid fa-plus ${hidden ? 'hid' : ''}`}></i>
                  </div>
                  <hr />
                  {dataArray1.map(item => (
                     <Link key={item.id}
                        className={`group ${clickedLinkID=== item.id ? 'clicked' : ''}`}
                        as={Link}
                        to={item.link}
                        onClick={() => setclickedLinkID(item.id)}
                     >
                        <i className={item.icon}></i>
                        <p className={hidden ? '' : 'hid'}>{item.name}</p>
                     </Link>
                     // <Link className="group" as={Link} to="/categories">
                     //     <i class="fa-regular fa-clock"></i>
                     //     <p className={hidden ? '' : 'hid'}> Categories</p>
                     // </Link>
                     // <Link className="group" as={Link} to="/products">
                     //     <i class="fa-regular fa-clock"></i>
                     //     <p className={hidden ? '' : 'hid'}> Products</p>
                     // </Link>
                     // <Link className="group" as={Link} to="/order">
                     //     <i class="fa-regular fa-clock"></i>
                     //     <p className={hidden ? '' : 'hid'}> Orders</p>
                     // </Link>
                     // <Link className="group" as={Link} to="/users">
                     //     <i class="fa-regular fa-clock"></i>
                     //     <p className={hidden ? '' : 'hid'}> Users</p>
                     // </Link>
                  ))}
               </div>

               {/* <div className='left_laptop_small'>
                        <h1> S</h1>
                        <div className="icon">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <hr />
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>

                        </div>
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className="group">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                    </div>
                    <div className="left_laptop_mobi">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled">Disabled</a>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div> */}
            </div>

            <div className='admin_right'>
               <NavbarAdmin />
               <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/orders" element={<Orders />} />
                  <Route exact path="/categories" element={<Categories />} />
                  <Route exact path="/products" element={<Products />} />
                  <Route exact path="/users" element={<Users />} />

               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default HomeAdmin;