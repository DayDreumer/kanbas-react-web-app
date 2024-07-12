import React from 'react';
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">

          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/5610/Home">
                  <img src="images/reactjs.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5610 Web Development
                    </h5>
                    <p className="card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/5200/Home">
                  <img src="images/database.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5200 Database System
                    </h5>
                    <p className="card-text">
                      DB
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/6620/Home">
                  <img src="images/cloudcomputing.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS6620 Cloud Computing
                    </h5>
                    <p className="card-text">
                      cloud computing 
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1000/Home">
                  <img src="images/Java.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1000 Java
                    </h5>
                    <p className="card-text">
                      Java
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1010/Home">
                  <img src="images/python.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1010 Python
                    </h5>
                    <p className="card-text">
                      Python
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/5540/Home">
                  <img src="images/gameprogramming.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5540 Game Programming
                    </h5>
                    <p className="card-text">
                      Game Programming
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/5100/Home">
                  <img src="images/AI.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5100 AI
                    </h5>
                    <p className="card-text">
                      AI
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/2000/Home">
                  <img src="images/music.jpg" width="100%" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      ART2000 Music
                    </h5>
                    <p className="card-text">
                      Music
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
  