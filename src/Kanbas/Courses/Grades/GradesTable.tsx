import React from 'react';
export default function GradesTable() {
    let data = [
      { name: "Jane Adams", setup: "100%", html: "96.67%", css: "92.18%", bootstrap: "66.22%" },
      { name: "Christina Allen", setup: "100%", html: "100%", css: "100%", bootstrap: "100%" },
      { name: "Samreen Ansari", setup: "100%", html: "100%", css: "100%", bootstrap: "100%" },
      { name: "Han Bao", setup: "100%", html: "100%", css: "88.03%", bootstrap: "98.99%" },
      { name: "Mahi Sai Srinivas Bobbili", setup: "100%", html: "96.67%", css: "98.37%", bootstrap: "100%" },
      { name: "Siran Cao", setup: "100%", html: "100%", css: "100%", bootstrap: "100%" }
    ];
  
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="bg-light">
            <tr>
              <th><strong>Student Name</strong></th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td style={{color: 'red' }}>{student.name}</td>
                <td>{student.setup}</td>
                <td>{student.html}</td>
                <td>
                  {index === 3 ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.css}
                    />
                  ) : (
                    student.css
                  )}
                </td>
                <td>{student.bootstrap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  