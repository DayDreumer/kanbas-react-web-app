import './AssignmentEditor.css';
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" type="text" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
            The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <table>
            <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" type="number" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignment">ASSIGNMENTS</option>
                            <option value="exams">EXAMS</option>
                            <option value="quizzes">QUIZZES</option>
                            <option value="projects">PROJECTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                            <option value="on-paper">On Paper</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <fieldset>
                            <legend>Online Entry Options</legend>
                            <label className="checkbox-label">
                                <input type="checkbox" id="wd-text-entry" />
                                Text Entry
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" id="wd-website-url" />
                                Website URL
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" id="wd-media-recordings" />
                                Media Recordings
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" id="wd-student-annotation" />
                                Student Annotation
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" id="wd-file-upload" />
                                File Uploads
                            </label>
                        </fieldset>
                    </td>
                </tr>
                <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign To</label>
                        </td>
                        <td>
                            <input id="wd-assign-to" type="text" value="Everyone" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                        <td>
                            <input id="wd-due-date" type="date" value="2024-05-13" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-available-from">Available From</label>
                        </td>
                        <td>
                            <input id="wd-available-from" type="date" value="2024-05-06" />
                        </td>
                        <td align="right" valign="top">
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                        <td>
                            <input id="wd-available-until" type="date" value="2024-05-28" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <div className="button-group">
                                <button>Cancel</button>
                                <button>Save</button>
                            </div>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
  );}
  