import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/csharp.png";
import Kompleweb from "./images/kompleweb.jpg";
const courseMap = {
  Angular,
  Bootstrap,
  Csharp,
  Kompleweb,
};

function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div>
      <img className="image" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
