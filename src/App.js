import GenInfo from "./components/GeneralInfo";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import { Component } from "react";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();

    this.state = {
      GenInfoForms: [],
      TempGenInfo: {
        Name: "John Doe",
        Email: "jdoe@gmail.com",
        Number: "+1 3208185195",
      },
      GeneralInfo: {
        Name: "John Doe",
        Email: "jdoe@gmail.com",
        Number: "+1 3208185195",
      },
      EduForms: [],
      TempEdu: {
        School: "New York University",
        Level: "College",
        Years: "2015 - 2019",
        Description:
          "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: uniqid(),
      },
      Edu: [],
      WorkForms: [],
      TempWork: {
        Company: "Delta",
        Position: "Software Engineer",
        WorkYears: "2020 - 2021",
        WorkDesc:
          "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: uniqid(),
      },
      Work: [],
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
    const { name, value } = e.target;
    this.setState({
      TempGenInfo: {
        ...this.state.TempGenInfo,
        [name]: value,
      },
    });
  };

  handleGIEdit = (e) => {
    const inputFields = Array.from(e.target.parentNode.childNodes);
    console.log(inputFields);
    inputFields.forEach((field) => field.removeAttribute("disabled"));
  };

  handleGISubmit = (e) => {
    e.preventDefault();
    const inputFields = Array.from(e.target.childNodes);
    inputFields.forEach((field) => {
      if (field.tagName === "INPUT") field.setAttribute("disabled", true);
    });
    this.setState({
      GeneralInfo: {
        ...this.state.TempGenInfo,
      },
    });
  };

  handleEduChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      TempEdu: {
        ...this.state.TempEdu,
        [name]: value,
      },
    });
  };

  handleWorkChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      TempWork: {
        ...this.state.TempWork,
        [name]: value,
      },
    });
  };

  handleWorkSubmit = (e) => {
    e.preventDefault();
    this.setState({
      Work: {
        Company: this.state.TempWork.Company,
        Position: this.state.TempWork.Position,
        WorkYears: this.state.TempWork.WorkYears,
        WorkDesc: this.state.TempWork.WorkDesc,
        id: this.state.TempWork.id,
      },
    });
  };

  handleNewEduForm = (e) => {
    const handleEdit = (e) => {
      const editBtn = e.target;
      const formElems = Array.from(editBtn.parentNode.parentNode.childNodes);
      const allEduElements = Array.from(
        editBtn.parentNode.parentNode.parentNode.childNodes
      );
      allEduElements.forEach((element) => {
        if (
          element !== editBtn.parentNode.parentNode.parentNode &&
          element.tagName === "FORM"
        ) {
          const formEls = element.childNodes;
          formEls.forEach((element) => {
            element.setAttribute("disabled", true);
          });
        }
      });
      formElems.forEach((element) => {
        element.removeAttribute("disabled");
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formElems = Array.from(e.target.childNodes);
      formElems.forEach((e) => {
        e.setAttribute("disabled", true);
      });
      const formKeyVals = Object.values(e.target);
      if (this.state.Edu.some((item) => item.id === formKeyVals[7].key)) {
        this.setState({
          Edu: this.state.Edu.map((item) => {
            if (item.id === formKeyVals[7].key) {
              item.School = this.state.TempEdu.School;
              item.Level = this.state.TempEdu.Level;
              item.Years = this.state.TempEdu.Years;
              item.Description = this.state.TempEdu.Description;
            }
            return item;
          }),
        });
      } else {
        this.setState({
          TempEdu: {
            ...this.state.TempEdu,
            id: uniqid(),
          },
          Edu: this.state.Edu.concat({
            ...this.state.TempEdu,
          }),
        });
      }
    };

    const handleDelete = (e) => {
      const formKeyVals = Object.values(e.target.parentNode.parentNode);
      this.setState({
        Edu: this.state.Edu.filter((item) => item.id !== formKeyVals[7].key),
        EduForms: this.state.EduForms.filter(
          (form) => form.key !== formKeyVals[7].key
        ),
      });
    };

    this.setState({
      EduForms: this.state.EduForms.concat(
        <form onSubmit={handleSubmit} key={this.state.TempEdu.id}>
          <strong>#{this.state.EduForms.length + 1}</strong>
          <input
            type="text"
            className="SchoolName"
            placeholder="School Name"
            name="School"
            onChange={this.handleEduChange}
            required
          ></input>
          <input
            type="text"
            className="SchoolLevel"
            name="Level"
            placeholder="Level (e.g. High Degree)"
            onChange={this.handleEduChange}
            required
          ></input>
          <input
            type="text"
            className="SchoolDur"
            name="Years"
            placeholder="Inclusive Years"
            onChange={this.handleEduChange}
            required
          ></input>
          <textarea
            type="text"
            name="Description"
            className="EduDesc"
            placeholder="School Description"
            cols="50"
            rows="3"
            onChange={this.handleEduChange}
            required
          ></textarea>
          <span>
            <button type="button" className="FormBtn" onClick={handleEdit}>
              Edit
            </button>
            <button type="button" className="FormBtn" onClick={handleDelete}>
              Delete
            </button>
          </span>
          <button type="submit" className="FormBtn SaveEdu">
            Save Changes
          </button>
        </form>
      ),
    });
  };

  handleNewWorkForm = (e) => {
    const handleEdit = (e) => {
      const editBtn = e.target;
      const formElems = Array.from(editBtn.parentNode.parentNode.childNodes);
      const allEduElements = Array.from(
        editBtn.parentNode.parentNode.parentNode.childNodes
      );
      allEduElements.forEach((element) => {
        if (
          element !== editBtn.parentNode.parentNode.parentNode &&
          element.tagName === "FORM"
        ) {
          const formEls = element.childNodes;
          formEls.forEach((element) => {
            element.setAttribute("disabled", true);
          });
        }
      });
      formElems.forEach((element) => {
        element.removeAttribute("disabled");
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formElems = Array.from(e.target.childNodes);
      formElems.forEach((e) => {
        e.setAttribute("disabled", true);
      });
      const formKeyVals = Object.values(e.target);
      console.log(formKeyVals);
      if (this.state.Work.some((item) => item.id === formKeyVals[7].key)) {
        this.setState({
          Work: this.state.Work.map((item) => {
            if (item.id === formKeyVals[7].key) {
              item.Company = this.state.TempWork.Company;
              item.Position = this.state.TempWork.Position;
              item.WorkYears = this.state.TempWork.WorkYears;
              item.WorkDesc = this.state.TempWork.WorkDesc;
            }
            return item;
          }),
        });
      } else {
        this.setState({
          TempWork: {
            ...this.state.TempWork,
            id: uniqid(),
          },
          Work: this.state.Work.concat({
            ...this.state.TempWork,
          }),
        });
      }
    };

    const handleDelete = (e) => {
      const formKeyVals = Object.values(e.target.parentNode.parentNode);
      console.log(formKeyVals);
      this.setState({
        Work: this.state.Work.filter((item) => item.id !== formKeyVals[7].key),
        WorkForms: this.state.WorkForms.filter(
          (form) => form.key !== formKeyVals[7].key
        ),
      });
    };
    this.setState({
      WorkForms: this.state.WorkForms.concat(
        <form onSubmit={handleSubmit} key={this.state.TempWork.id}>
          <strong>#{this.state.WorkForms.length + 1}</strong>
          <input
            type="text"
            className="CompanyName"
            name="Company"
            placeholder="Company Name"
            onChange={this.handleWorkChange}
            required
          ></input>
          <input
            type="text"
            className="PositionTitle"
            name="Position"
            placeholder="Position/Title"
            onChange={this.handleWorkChange}
            required
          ></input>
          <input
            type="text"
            className="WorkDur"
            name="WorkYears"
            placeholder="Inclusive Years"
            onChange={this.handleWorkChange}
            required
          ></input>
          <textarea
            type="text"
            className="JobDesc"
            name="WorkDesc"
            placeholder="Job Description"
            cols="50"
            rows="3"
            onChange={this.handleWorkChange}
            required
          ></textarea>
          <span>
            <button type="button" className="FormBtn" onClick={handleEdit}>
              Edit
            </button>
            <button type="button" className="FormBtn" onClick={handleDelete}>
              Delete
            </button>
          </span>
          <button type="submit" className="FormBtn SaveEdu">
            Save Changes
          </button>
        </form>
      ),
    });
  };

  render() {
    const { GeneralInfo, Edu, Work, EduForms, WorkForms } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <h1>CV Application Tool</h1>
          <button className="Edit" onClick={this.editMenu}>
            Edit CV
          </button>
        </div>
        <div className="Forms">
          <div className="GenInfo">
            <h2>General Information</h2>
            <form onSubmit={this.handleGISubmit}>
              <input
                type="text"
                className="FullName"
                placeholder="Full Name"
                name="Name"
                onChange={this.handleGIChange}
                required
              ></input>

              <input
                type="email"
                name="Email"
                className="Email"
                placeholder="Email"
                onChange={this.handleGIChange}
                required
              ></input>

              <input
                type="tel"
                className="CellNum"
                placeholder="Phone Number"
                name="Number"
                onChange={this.handleGIChange}
                required
              ></input>
              <button
                type="button"
                className="FormBtn"
                onClick={this.handleGIEdit}
              >
                Edit
              </button>
              <button type="submit" className="FormBtn">
                Save Changes
              </button>
            </form>
          </div>
          <div className="Education">
            <h2>Education</h2>
            {EduForms}
            <button
              className="FormBtn newEduBtn"
              onClick={this.handleNewEduForm}
              type="button"
            >
              Add New
            </button>
          </div>
          <div className="WorkExp">
            <h2>Work & Leadership Experience</h2>
            {WorkForms}
            <button
              className="FormBtn newWorkBtn"
              onClick={this.handleNewWorkForm}
              type="button"
            >
              Add New
            </button>
          </div>
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
          <Education EduBG={Edu} />
          <h2>Work Experience</h2>
          <WorkExp WorkBG={Work} />
        </div>
        <footer>Made by Keane Andre</footer>
      </div>
    );
  }
}

export default App;
