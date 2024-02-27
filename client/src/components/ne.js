// const Navbar = () => {
//     const { setAuth, user } = useAuth();
//     const navigate = useNavigate();
  
//     const logout = async () => {
//       const res await axios.get(
//         "http://localhost:5000/api/logout/",
//         { withCredentials: true }
//       );
//       console.log(res.data);
//       setAuth(false);
//       navigate('/login');
//     }
  
//     return(
//       <section>
//         <div className="navbar">
//           <ul className="navbar-menu">
//             <li><Link to={"/dashboard"}>Dashboard</Link></li>
//             <li><Link to={"/profile"}>Welcome {user.username}</Link></li>
//             <li><button type='button' onClick={logout}>Logout</button></li>
//           </ul>
//         </div>
//         <Outlet />
//       </section>
//     );
//   };