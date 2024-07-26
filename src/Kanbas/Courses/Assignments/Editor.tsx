import React, {useState, useEffect} from 'react';
import * as db from "../../Database";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import './AssignmentEditor.css';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntil?: string;
  editing?: boolean;
}

export default function AssignmentEditor() {
    const {cid, aid} = useParams();
    const assignments = useSelector((state: any) => state.assignments.assignments);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [assignment, setAssignment] = useState<Partial<Assignment>>({
      title: '',
      description: '',
      points: 100,
      dueDate: '',
      availableDate: '',
      availableUntil: ''
    });

    useEffect(() => {
      if (aid) {
        const existingAssignment = assignments.find((a: Assignment) => a._id === aid);
        if (existingAssignment) {
          setAssignment(existingAssignment);
        }
      }
    }, [aid, assignments]);

    const handleSave = () => {
      if (aid) {
        console.log(aid)
        dispatch(updateAssignment({ ...assignment, _id: aid }));
      } else {
        dispatch(addAssignment({ ...assignment, course: cid }));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      
      setAssignment(prevState => ({ ...prevState, [name]: value }));
    };

    if(!assignment) return <p>Assignment not found</p>;
    return (
      <div className="container mt-3">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label ">Assignment Name</label>
          <input type="text" className="form-control" id="wd-name" name="title" placeholder="Enter assignment name" value={assignment.title} onChange={handleChange} />
        </div>
  
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label"></label>
          <textarea className="form-control" id="wd-description" rows={10} name="description" value={assignment.description} onChange={handleChange}/>
        </div>
        
        <div className="mb-3 row align-items-start">
          <div className="col-3 text-end">
            <label htmlFor="wd-points" className="form-label pt-1">Points</label>
          </div>
          <div className="col">
            <input type="text" className="form-control" id="wd-points" name="points" value={assignment.points} onChange={handleChange}/>
          </div>
        </div>
        <div className="mb-3 row align-items-start">
          <div className="col-3 text-end">
            <label htmlFor="wd-group" className="form-label pt-1">Assignment Group</label>
          </div>
          <div className='col'>
            <select className="form-control" id="wd-group" name="group" onChange={handleChange}>
              <option value="assignments">ASSIGNMENTS</option>
              <option value="exams">EXAMS</option>
              <option value="quizzes">QUIZZES</option>
            </select>
          </div>
        </div>
        
        <div className="mb-3 row align-items-start" >
         <div className="col-3 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label pt-1">Display Grade as</label>
         </div>
          <div className='col'>
            <select className="form-control" id="wd-display-grade-as" name="displayGradeAs" onChange={handleChange}>
              <option value="points">Points</option>
              <option value="percentage">Percentage</option>
              <option value="letter-grade">Letter Grade</option>
            </select>
          </div>
        </div>
  
        <div className="row align-items-start mb-3">
          <div className='col-3 text-end'>
            <label htmlFor="wd-submission-type" className="form-label pt-1">Submission Type</label>
          </div>
          <div className='col border p-3'>
            <div className='mb-3'>
              <select className="form-control" id="wd-submission-type" name="submissionType" onChange={handleChange}>
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
              </select>
            </div>
  
            <fieldset className="border p-2">
              <legend className="w-auto p-2"><strong>Online Entry Options</strong></legend>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="wd-text-entry" name="textEntry" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="wd-website-url" name="websiteUrl" defaultChecked onChange={handleChange}/>
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="wd-media-recordings" name="mediaRecordings" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="wd-media-recordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="wd-student-annotation" name="studentAnnotation" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="wd-file-upload" name="fileUploads" onChange={handleChange}/>
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </fieldset>
            
          </div>
        </div>
  
  
  
        <div className="row align-items-start mb-3">
          <div className="col-3 text-end">
            <label htmlFor="wd-display-assign" className="form-label pt-1">Assign</label>
          </div>
          <div className='col border p-3'>
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label mb-0"><strong>Assign To</strong></label>
              <input type="text" className="form-control" id="wd-assign-to" name="assignTo" value="Everyone" onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label mb-0"><strong>Due Date</strong></label>
              <input type="date" className="form-control" id="wd-due-date" name="=dueDate" value={assignment.dueDate} onChange={handleChange}/>
            </div>
            <div className='row mb-3'>
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label mb-0" ><strong>Available From</strong></label>
                <input type="date" className="form-control" id="wd-available-from" name="availableFrom" value={assignment.availableDate} onChange={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label mb-0" ><strong>Until</strong></label>
                <input type="date" className="form-control" id="wd-available-until" name="availableUntil" value={assignment.availableUntil} onChange={handleChange}/>
              </div>
            </div>
          </div> 
        </div>
  
        <div className="text-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <button className="btn btn-success" style={{background: 'red'}} onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  }