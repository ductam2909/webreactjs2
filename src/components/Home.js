import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PriceList from './PriceList';
import dl from './data.json';
class Home extends  Component{
    render(){
        return(
            <div>
                
// {/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
			 			<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg2">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
						<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
							</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg3">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg4">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Chào mừng quý khách đến với nhà hàng TBT</h2>
								<p>Món Ngon Mỗi Ngày Với TBT. Hàng Trăm Món Ăn Hàng Ngày Hấp Dẫn, Mới Lạ, Độc Đáo Thơm Nức Mũi Cả Nhà Cùng Mê. Hãy cùng TBT khám phá và tạo ra những món ăn tuyệt vời cho gia đình bạn. Đã Nấu Là Ngon Đúng Điệu. Món Ăn Ngon Đúng Điệu.</p>
								
								<Link to='/product' class="btn">Start with menu</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
						<div class="navigation"> 
							<div>
							  <label for="slides_1"></label>
							  <label for="slides_2"></label>
							  <label for="slides_3"></label>
							  <label for="slides_4"></label>
							</div>
						</div>
					</div> 
				</div>

 <section class="content-info py-5" id="about">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Món Ngon mỗi Ngày</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">

                <div class="title-desc text-center px-lg-5">
					<img src="https://lh3.googleusercontent.com/tYjZqJzN9eLoja7bLgPuiMbNJLcXu9SZf9HFSdmHUXnn4DwP-kYh7-Xzf4AVTopToV2m=h1024-no-tmp_m_n_ngon_m_i_ng_y_d_y_n_u_n_qua_video_apk_poster.jpg" alt="news image" class="img-fluid" />
                    <p class="px-lg-5">Có những ngày nhìn ra bên ngoài cửa sổ, thấy trời mưa chuyển mùa là cả nhà liền thèm ngay món chả chiên nóng giòn, gỏi rau mầm giòn giòn với một tô canh nóng hổi vừa thổi vừa ăn luôn nè!</p>
             		<br/>
             		 <p class="px-lg-5">Đúng theo yêu cầu khẩu vị ngày mưa của Mẹ và cả nhà, thực đơn gợi ý của Món Ngon Mỗi Ngày tối nay sẽ toàn là món ngon đơn giản mà cả nhà thích, vẫn bảo đảm hợp khẩu vị mà nhiều dinh dưỡng nữa nha!</p>
                </div>
            </div>
        </div>
    </section>


     <section class="services py-5" id="services">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Món ngon nè!</h3>
            <div class="row ab-info">
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <Link to="/product2/9"><img src="https://monngonmoingay.com/wp-content/uploads/2020/11/cua-lot-chien-xot-thai-500.jpg.webp" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Cua lột chiên sốt thái</h4>
							<Link to="/product2/9" class="read-more two btn m-0 px-3" role="button"><span class="fa fa-arrow-circle-o-right"> </span></Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
					<Link to="/product2/2"><img src="https://monngonmoingay.com/wp-content/uploads/2021/06/sup-thanh-cua-hat-chia-500.jpg.webp" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Súp canh hạt chia</h4>
                            <a href="/product2/2" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ab-info second mt-lg-4">
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/product2/8"><img src="https://monngonmoingay.com/wp-content/uploads/2020/11/goi-bon-mua-500.jpg.webp" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Gỏi bốn mùa</h4>
                            <a href="product2/8" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/product2/7"><img src="https://monngonmoingay.com/wp-content/uploads/2020/12/salad-muc-ong-rong-bien-500.jpg.webp" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Sa lát mực ống rong biển</h4>
                            <a href="/product2/7" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/product2/5"><img src="https://monngonmoingay.com/wp-content/uploads/2021/01/bi-do-hap-hat-sen-500.jpg.webp" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Bí đỏ hấp hạt sen</h4>
                            <a href="/product2/5" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ab-content">
                    <div class="ab-content-inner">
					<Link to="/product2/3"><img src="https://monngonmoingay.com/wp-content/uploads/2015/08/4_CQC0279_BunXaoLongNghe.png" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Bún gạo lòng xào nghệ</h4>
                            <a href="/product2/3" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
<section class="subscribe" id="subscribe">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div class="news-icon mr-3">
					<span class="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div class="text">
					<h3>Món ngon mỗi ngày</h3>
				</div>
			</div>
			<div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Enter your email here" required="" />
					<button class="btn1"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
				<p>Phản hồi</p>
			</div>
		</div>
	</div>
</section>
    
    </div>
        )
    }
}
export default Home