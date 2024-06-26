import React from "react";
import "./StudentDashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function StudenDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <img
              src="https://cdn-icons-png.flaticon.com/128/160/160201.png"
              alt="icon"
            ></img>
            Student Dashboard
          </h2>
        </div>
        <div className="t1">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="card_dash">
              <div className="card_dash_left">
                <h5>Total Purchased Courses</h5>
                <h2>15</h2>
                <span className="crdbg_3">New 5</span>
              </div>
              <div className="card_dash_right">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg"
                  alt="icon"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="card_dash">
              <div className="card_dash_left">
                <h5>Total Instrutors Subscribing</h5>
                <h2>45</h2>
                <span className="crdbg_4">New 3</span>
              </div>
              <div className="card_dash_right">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg"
                  alt="icon"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="section3125 mt-50">
           
              <h4 className="item_title">News</h4>
              
            
            <div className="item">
              <div className="fcrse_1">
                <a href="#" className="fcrse_img">
                  <img
                    src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-1.jpg"
                    alt=""
                  ></img>
                </a>

                <div className="fcrse_content">
                  <a href="#" className="crsedt145 mt-15">
                    COVID-19 Updates & Resources
                  </a>
                  <p className="news_des45">
                    See the latest updates to coronavirus-related content,
                    including changes to monetization, and access new Creator
                    support resources
                  </p>
                  <div className="auth1lnkprce">
                    <a href="#" className="cr1fot50">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="section3125 mt-50">
            <h4 className="item_title">What's new in Cursus?</h4>
          </div>
          <div className="la5lo1">
            <div className="fcrse_1">
              <div className="fcrse_content">
                <a href="#" className="new_links10">
                  Improved performance on Studio Dashboard
                </a>
                <a href="#" className="new_links10">
                  See more Dashboard updates
                </a>
                <a href="#" className="new_links10">
                  See issues-at-glance for Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
