import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center">
			<div class="header-agile">
				<h1>
					<Link to='/' class="navbar-brand logo2">
						<span class="fa fa-cutlery clss5" aria-hidden="true" ></span>   TBT Restaurant   <span class="fa fa-hand-o-left" aria-hidden="true" ></span>
					</Link>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active"><Link to='/'>Home</Link></li>
							<li class="mr-lg-3 mr-2"><Link to='/about'>About</Link></li>
							<li class="mr-lg-3 mr-2 p-0">
							{/* <!-- First Tier Drop Down --> */}
							<label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><Link to='/product'>Product</Link></li>
								<li><Link to='/listproduct'>listproduct</Link></li>
							</ul>
							</li>
							<li class="mr-lg-3 mr-2"><Link to='/contact'>Contact</Link></li>
							{/* <li class="mr-lg-3 mr-2"><Link to='/login'>Login</Link></li> */}
							<li class="mr-lg-3 mr-2 p-0">
							<label for="drop-2" class="toggle">Login <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<a href="#">Login <span class="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><Link to='/login'>Admin</Link></li>
								<li><Link to='#'>User</Link></li>
							</ul>
							</li>

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
        )
    }
}
export default Navbar