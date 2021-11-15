function App() {
  return (
    <div className="App">
      <div className="GenInfo">
        <form>
          <h1>General Information</h1>

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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="Education">
        <form>
          <h1>Education</h1>
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
        </form>
        <button type="submit">Submit</button>
        <button type="button">Add</button>
      </div>
      <div className="WorkExp">
        <form>
          <h1>Work & Leadership Experience</h1>
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
        </form>
        <button type="submit">Submit</button>
        <button type="button">Add</button>
      </div>

      <div className="cv-container"></div>
    </div>
  );
}

export default App;
