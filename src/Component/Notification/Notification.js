import React from "react";
import "./Notification.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Notification() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title1">
            <i class="fa-regular fa-bell"></i>
            Notification
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <a href="/" className="setting_noti">
            Notification Setting
          </a>
          <div className="all_msg_bg">
            <div className="channel_my item all__noti5">
              <div className="profile_link">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                  alt=""
                ></img>
                <div className="pd_content">
                  <h6>Rock William</h6>
                  <p className="noti__text5">
                    Like Your Comment On Video
                    <span className="crse_bl"> How to create sidebar menu</span>.
                  </p>
                  <span className="nm_time">2 min ago</span>
                </div>
              </div>
            </div>

              <div className="channel_my item all__noti5">
                <div className="profile_link">
                  <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg" alt="">
                  </img>
                  <div className="pd_content">
                    <h6>
                    Jassica Smith
                    </h6>
                    <p className="noti__text5">
                    Added New Review In Video 
                    <span className="crse_bl"> Full Stack PHP Developer</span>.

                    </p>
                    <span class="nm_time">12 min ago</span>
                  </div>
                
                </div>
              </div>





            <div className="channel_my item all__noti5">
              <div className="profile_link">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
                  alt=""
                ></img>
                <div className="pd_content">
                  <p className="noti__text5">
                  Your Membership Activated.
                  </p>
                  <span class="nm_time">20 min ago</span>
                </div>
              </div>
            </div>
            <div className="channel_my item all__noti5">
              <div className="profile_link">
              <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
                  alt=""
                ></img>
                <div className="pd_content">
                    <p className="noti__text5">
                    You buy a new course. 
                    <a href="/" class="crse_bl"> How to create sidebar menu</a>
                    </p>
                    <span class="nm_time">20 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
