import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-40">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="item_f1">
            <a href="terms_of_use.html">Copyright Policy</a>
            <a href="terms_of_use.html">Terms</a>
            <a href="terms_of_use.html">Privacy Policy</a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer_bottom">
              <div className="row">
                <div className="col-md-6">
                  <ul className="fotb_left">
                    <li>
                    <a href="index.html">
												<div class="footer_logo">
													<img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg" alt=""></img>
												</div>
											</a>
                    </li>
                    <li>
                      <p>
                      © 2024 
                      <strong> Cursus</strong>
                      . All Rights Reserved.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                <div className="edu_social_links">
                <a href="#">
                <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#">
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                <i class="fab fa-pinterest-p"></i>
                </a>

                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
