import { useNavigate } from "react-router-dom";

const CourseSelector = () => {
  const navigate = useNavigate();

  const selectCourse = (course) => {
    const name = localStorage.getItem("currentStudent");
    if (!name) {
      alert("Please login first!");
      return;
    }

    localStorage.setItem("selectedCourse", course);

    if (course === "3-5") navigate("/game-3-5");
    else if (course === "6-8") navigate("/game-6-8");
    else if (course === "9-15") navigate("/game-9-15");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Select a Course</h2>
      <div className="flex flex-col gap-4">
        <button onClick={() => selectCourse("3-5")} className="btn">3–5 Years</button>
        <button onClick={() => selectCourse("6-8")} className="btn">6–8 Years</button>
        <button onClick={() => selectCourse("9-15")} className="btn">9–15 Years</button>
      </div>
    </div>
  );
};

export default CourseSelector;
