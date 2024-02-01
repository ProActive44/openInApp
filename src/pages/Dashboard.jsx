import "../styles/navigatingDivs.css";
import NavigatingDiv from "../components/NavigatingDiv";
import TopBar from "../components/TopBar";
import UploadBox from "../components/UploadBox";

const Dashboard = () => {


  return (
    <div className="h-[100%] flex">
      <div className="h-[100%]">
        <NavigatingDiv />
      </div>
      <div className="w-[100%]">
        <div>
          <TopBar  name={name}/>
        </div>

        <div>
          <UploadBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
