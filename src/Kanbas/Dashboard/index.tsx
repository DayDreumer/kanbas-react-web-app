export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">

          <div className="wd-dashboard-course">
            <img src="images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5610/Home">
                CS5610 Web Development
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/5610/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="images/database.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5200/Home">
                CS5200 Database System
              </a>
              <p className="wd-dashboard-course-title">
                DB 
              </p>
              <a href="#/Kanbas/Courses/5200/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/cloudcomputing.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6620/Home">
                CS6620 Cloud Computing
              </a>
              <p className="wd-dashboard-course-title">
                cloud computing 
              </p>
              <a href="#/Kanbas/Courses/6620/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/Java.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1000/Home">
                CS1000 Java
              </a>
              <p className="wd-dashboard-course-title">
                Java
              </p>
              <a href="#/Kanbas/Courses/1000/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/python.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1010/Home">
                CS1010 Python
              </a>
              <p className="wd-dashboard-course-title">
                Python
              </p>
              <a href="#/Kanbas/Courses/1010/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/gameprogramming.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5540/Home">
                CS5540 Game Programming
              </a>
              <p className="wd-dashboard-course-title">
              Game Programming
              </p>
              <a href="#/Kanbas/Courses/5540/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/AI.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5100/Home">
                CS5100 AI
              </a>
              <p className="wd-dashboard-course-title">
                AI
              </p>
              <a href="#/Kanbas/Courses/5100/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
          <img src="images/music.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2000/Home">
                ART2000 Music
              </a>
              <p className="wd-dashboard-course-title">
                Music
              </p>
              <a href="#/Kanbas/Courses/2000/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );
}
  