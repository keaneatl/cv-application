import GenInfo from "./components/GeneralInfo";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      GeneralInfo: {
        Name: "John Doe",
        Email: "jdoe@gmail.com",
        Number: "+1 3208185195",
      },
      Edu: [
        {
          School: "New York University",
          Level: "College",
          Years: "2015 - 2019",
          Description:
            "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
      ],
      Work: [
        {
          Company: "Delta",
          Position: "Software Engineer",
          WorkYears: "2020 - 2021",
          WorkDesc:
            "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        },
      ],
    };
  }

  editMenu = (e) => {
    const forms = document.querySelector(".Forms");
    const cv = document.querySelector(".CV");

    if (!forms.hasAttribute("style")) {
      e.target.textContent = "Return";
      forms.setAttribute("style", "display:flex;");
      cv.setAttribute("style", "display: none;");
    } else {
      forms.removeAttribute("style");
      cv.removeAttribute("style");
      e.target.textContent = "Edit CV";
    }
  };

  handleGIChange = (e) => {
    const { target: name, value } = e;
    this.setState({
      GeneralInfo: {
        [name]: value,
      },
    });
  };

  handleEduChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      Edu: {
        [name]: value,
      },
    });
  };

  handleWorkChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      Work: {
        [name]: value,
      },
    });
  };

  render() {
    const { GeneralInfo, Edu, Work } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <h1>CV Application Tool</h1>
          <button className="Edit" onClick={this.editMenu}>
            Edit CV
          </button>
        </div>
        <div className="Forms">
          <form>
            <div className="GenInfo">
              <h2>General Information</h2>

              <input
                type="text"
                className="FullName"
                placeholder="Full Name"
                onChange={this.handleGIChange}
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
            <button className="FormBtn Save" type="submit">
              Save Changes
            </button>
          </form>
        </div>
        <div className="CV">
          <div className="CVHeader">
            <GenInfo
              FullName={GeneralInfo.Name}
              Email={GeneralInfo.Email}
              PhoneNum={GeneralInfo.Number}
            />
          </div>
          <h2>Education</h2>
          <Education
            School={Edu[0].School}
            Level={Edu[0].Level}
            Years={Edu[0].Years}
            SchoolDesc={Edu[0].Description}
          />
          <h2>Work Experience</h2>
          <WorkExp
            Company={Work[0].Company}
            Position={Work[0].Position}
            WorkYears={Work[0].WorkYears}
            WorkDesc={Work[0].WorkDesc}
          />
        </div>
      </div>
    );
  }
}

export default App;
