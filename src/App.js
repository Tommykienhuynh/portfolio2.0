
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
  
 
} from "react-router-dom";
import ScrollToTop from "./scrollToTop";

import Homepage from "./components/homepage/homepage";
import MobileHome from "./components/homepage/mobile.jsx"
import ProjectPage from "./components/homepage/projectPages/projectPage";
import Resume from "./components/resume/resume";

import aniAlgoPic from "./assets/projectImgs/aniAlgoPic.png";
import moodTrackerPic from "./assets/projectImgs/moodTracker.png";
import travelEasyPic from "./assets/projectImgs/travelEasy.png";
import unavsaPic from "./assets/projectImgs/unavsa.png";
import unavsaTwo from "./assets/projectImgs/unavsaTwo.png";
import unavsaThree from "./assets/projectImgs/unavsaThree.png";
import edufyPic from "./assets/projectImgs/edufyPic.png";
import edufyOne from "./assets/projectImgs/edufyOne.png";
import edufyTwo from "./assets/projectImgs/edufy2.png";
import moodOne from "./assets/projectImgs/moodOne.png";
import moodTwo from "./assets/projectImgs/moodTwo.png";
import moodThree from "./assets/projectImgs/moodThree.png";
import yelpOne from "./assets/projectImgs/yelpOne.png";
import yelpThree from "./assets/projectImgs/yelpTwo.png";
import yelpTwo from "./assets/projectImgs/yelpThree.png";
import travelOne from "./assets/projectImgs/travelEasyOne.png";
import dataBricks from "./assets/projectImgs/dataBricksPic.png"
import calendarPic from "./assets/projectImgs/calendar.png";

function App() {
  return (
    <Router>
       <ScrollToTop />
       <Routes>
        {/*  <Route path="/" exact element={<Homepage />} /> */}
         <Route path="/" exact element={<MobileHome/>} />
         <Route path="/resume" exact element={<Resume/>} />
         <Route path="/edufy" exact element={<ProjectPage  
         name={"Edufy"}
         desc={"A game based on productivity to help users finish real world tasks by giving them in game rewards."}
         lang={"React, NodeJS, MongoDB"}
         git={"https://github.com/Tommykienhuynh/Edufy.space"}
         web={"https://devpost.com/software/eudfy-education-for-you"}
         mainPic={edufyPic}
         pic1={edufyOne}
         pic2={edufyTwo}
         />} />
         <Route path="/aniAlgo" exact element={<ProjectPage  
         name={"AniAlgo"}
         desc={"Applications that provide an animated representation of sorting algorithms and data structures."}
         lang={"React, NodeJS, MongoDB"}
         git={"https://github.com/Tommykienhuynh/AniAlgo"}
         web={"https://ani-algo-git-main-tommykienhuynh.vercel.app/"}
         mainPic={aniAlgoPic}
        
         />} />
       <Route path="/travelEasy" exact element={<ProjectPage  
         name={"Travel Easy"}
         desc={"A travel website that helps provide users information on where to go on their next vacation trip."
         }
         lang={"React.JS, SASS"}
         git={"https://github.com/Tommykienhuynh/TravelEasy"}
         web={"https://travel-easy-tommykienhuynh.vercel.app/"}
         mainPic={travelEasyPic}
         pic1={travelOne}
       
         />} />
             <Route path="/moodTracker" exact element={<ProjectPage  
         name={"moodTracker"}
         desc={"Web app that allows users to record their mood and offers appealing visualization in forms of graphic calendars, and data visualization. "}
         lang={"React.JS, SASS"}
         git={"https://github.com/Tommykienhuynh/moodTracker2.0/tree/main "}
         web={"https://mood-tracker2-0-rgca6b0pl-tommykienhuynh.vercel.app/"}
         mainPic={moodTrackerPic}
         pic1={moodOne}
         pic2={moodTwo}
         pic3={moodThree}
         />} />
       <Route path="/yelpData" exact element={<ProjectPage  
         name={"Yelp Big Data Mealtime Project "}
         desc={"Big data project that analyzes restaurant meal times such as breakfast, lunch and dinner to determine impactability."}
         lang={"Pysparks, SQL, Python"}
         git={"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1669240239397729/3100695104000771/2457717539103669/latest.html"}
         web={"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1669240239397729/3100695104000771/2457717539103669/latest.html"}
         mainPic={dataBricks}
         pic1={yelpOne}
         pic2={yelpTwo}
         pic3={yelpThree}
         />} />
         <Route path="/clubCalendar" exact element={<ProjectPage  
         name={"Club Calendar "}
         desc={"A calendar app that helps school clubs create events and display them on a public calendar."}
         lang={"Javascript, BootStrap"}
         git={"https://github.com/Tommykienhuynh/UNAVSACalendar"}
         web={"https://event-cal.glitch.me/calendar.html"}
         mainPic={calendarPic}
         />} />
         <Route path="/unavsaPage" exact element={<ProjectPage  
         name={"Club Calendar "}
         desc={"Manage and updated UNAVSA.org. "}
         lang={"Javascript, BootStrap"}
         web={"https://unavsa.org/"}
         mainPic={unavsaPic}
         pic1={unavsaTwo}
         pic2={unavsaThree}
         
         />} />
         
       </Routes>
     
    </Router>
  );
}

export default App;
