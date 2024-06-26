import React from "react";
import "./StudentCourses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function StudentCourses() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="st_title">
            <i class="fas fa-book"></i>
            Purchased Courses
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="my_courses_tabs mp-30">
            <div className="table-responsive ">
              <table className=" ucp-table" id="content-table">
              {/* <table className="table ucp-table" id="content-table"> */}

                <thead className="thead-s ">
                  <tr>
                    <th scope="col">Item No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Vendor</th>
                    <th scope="col">Category</th>
                    <th scope="col">Delivery Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Purchase Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>Course Title Here</td>
                    <td>
                      <a href="/">Zoena Singh</a>
                    </td>
                    <td>
                      <a href="/">Web Development</a>
                    </td>
                    <td>
                      <b className="course_active">Download</b>
                    </td>
                    <td>$15</td>
                    <td>25 March 2020</td>
                    <td>
                      <a href="/" title="Download" className="gray-s">
                        <i class="fas fa-download"></i>
                      </a>
                      <a href="/" title="Delete" className="gray-s">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                      <a href="/" title="Print" className="gray-s">
                        <i class="fas fa-print"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Course Title Here</td>
                    <td>
                      <a href="/">Rock William</a>
                    </td>
                    <td>
                      <a href="/">C++</a>
                    </td>
                    <td>
                      <b className="course_active">Download</b>
                    </td>
                    <td>$20</td>
                    <td>20 March 2020</td>
                    <td>
                      <a href="/" title="Download" className="gray-s">
                        <i class="fas fa-download"></i>
                      </a>
                      <a href="/" title="Delete" className="gray-s">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                      <a href="/" title="Print" className="gray-s">
                        <i class="fas fa-print"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
