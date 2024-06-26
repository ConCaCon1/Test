import "./App.css";
import Footer from "./Component/Footer/Footer";
import Notification from "./Component/Notification/Notification";
import StudentCourses from "./Component/StudentCourses/StudentCourses";
//import StudentDashboard from "./Component/StudentDashboard/StudentDashboard";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <div>      
        <Notification/>    
        <Footer />
      </div>
    </div>
  );
}

export default App;
