import "../styles/navigatingDivs.css";
import NavigatingDiv from "../components/NavigatingDiv";
import TopBar from "../components/TopBar";
import UploadBox from "../components/UploadBox";
import AfterUpload from "../components/AfterUpload";
import { useRef, useState } from "react";

const Dashboard = () => {
  const [showTable, setShowTable] = useState(false);
  const afterUploadRef = useRef(null);

  const handleShowTable = () => {
    setShowTable(true);
    // Scroll to the AfterUpload component
    afterUploadRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex ">
      <div className="h-full sticky top-0 left-0">
        <NavigatingDiv />
      </div>

      <div className="w-full overflow-auto">
        <div>
          <TopBar />
        </div>

        <div>
          <UploadBox handleShowTable={handleShowTable} />
        </div>

        <div ref={afterUploadRef}>{showTable && <AfterUpload />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
