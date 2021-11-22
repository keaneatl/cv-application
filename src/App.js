import GenInfo from "./components/GeneralInfo";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";

function App() {


const editMenu = (e) => {
  const forms = document.querySelector(".Forms");
  
  if (!forms.hasAttribute("style")){
    e.target.textContent = "Return"
    forms.setAttribute("style", "display:flex;");
  } else {
    forms.removeAttribute("style");
    e.target.textContent = "Edit CV"
  }
}
  return (
    <div className="App">
      <div className="Header">
        <h1>CV Application Tool</h1>
        <button className="Edit" onClick={editMenu}>Edit CV</button>
      </div>
      <div className="Forms">
      <form>
        <div className="GenInfo">
          
            <h2>General Information</h2>

            <input
              type="text"
              className="FullName"
              placeholder="Full Name"
            ></input>

            <input type="email" className="Email" placeholder="Email"></input>

            <input
              type="tel"
              className="CellNum"
              placeholder="Phone Number"
            ></input>
            <textarea
              name="Description"
              cols="50"
              rows="5"
              placeholder="Profile Description"
            />
        </div>
        <div className="Education">
            <h2>Education</h2>
            <strong>#1</strong>
            <input
              type="text"
              className="SchoolName"
              placeholder="School Name"
            ></input>
            <input
              type="text"
              className="SchoolLevel"
              placeholder="Level (e.g. High Degree)"
            ></input>
            <input
              type="text"
              className="SchoolDur"
              placeholder="Inclusive Years"
            ></input>
            <button className="FormBtn">Add New</button>
        </div>
        <div className="WorkExp">
            <h2>Work & Leadership Experience</h2>
            <strong>#1</strong>
            <input
              type="text"
              className="CompanyName"
              placeholder="Company Name"
            ></input>
            <input
              type="text"
              className="PositionTitle"
              placeholder="Position/Title"
            ></input>
            <input
              type="text"
              className="WorkDur"
              placeholder="Inclusive Years"
            ></input>
            <textarea
              type="text"
              className="JobDesc"
              placeholder="Job Description"
              cols="50"
              rows="3"
            ></textarea>
            <button className="FormBtn">Add New</button>
        </div>
        <button className="FormBtn Save" type="submit">Save Changes</button>
        </form>
      </div>
      <div className="CV">
        <div className="CVHeader">
          <GenInfo
            FullName="John Doe"
            Email="sdfsdf@asd.com"
            PhoneNum="6653272137"
          />
        </div>
        <h2>Education</h2>
        <Education School="New York University" Level="College" Years="2015-2019" 
        SchoolDesc="Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum" />
        <h2>Work Experience</h2>
         <WorkExp Company="Delta" Position="Software Engineer" WorkYears="2020 - Present" 
         WorkDesc="Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum" />
      </div>
    </div>
  );
}

export default App;
