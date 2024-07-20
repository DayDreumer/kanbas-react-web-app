import React from 'react';
import { Link, NavLink, useParams, useLocation } from "react-router-dom";
import "./index.css";
export default function CoursesNavigation() {
    const{ cid } = useParams();
    const { pathname } = useLocation();
    const links = [
        {label:"Home", path:`Home`},
        {label:"Modules", path:`Modules`}, 
        {label:"Piazza", path:`Piazza`},
        {label:"Zoom", path:`Zoom`},
        {label:"Assignments", path:`Assignments`},
        {label:"Quizzes", path:`Quizzes`},
        {label:"Grades", path:`Grades`},
    ];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
            <Link key={link.path} to={link.path} className={`list-group-item border border-0
                    ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
                {link.label}
            </Link>
            ))}
        </div>
  );
}