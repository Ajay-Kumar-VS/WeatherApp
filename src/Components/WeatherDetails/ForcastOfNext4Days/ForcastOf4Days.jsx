import { hourglass } from "ldrs";
hourglass.register();
import "./ForcastOf4Days.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import ForcastCard from "./ForcastCard/ForcastCard";
const ForcastOf4Days = () => {
  //using useSelector function/hook of redux toolkit to get data from redux store
  let details = useSelector((store) => {
    return store.Weather;
  });

  let forcastOfnext4daysData = details[0].forcastDataOfnext4days;

  // if we dont have forcast details means there is no search have been till now by user
  if (forcastOfnext4daysData.length === 0) {
    return (
      <div className=" mainFrameOfLoader">
        <div className=" EnterCityName">
          <p className="promptMessage">
            Ready to know the weather of your city?
            <br />
            <span className="sub-promptMessage">Enter the CityName first</span>
          </p>
        </div>

        <div className="loader">
          <div className="container">
            <div className="half"></div>
            <div className="half"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forcastOf4Days">
      <div className="headingline">
        <div className="lines"> Next 4Days Forcast</div>
      </div>
      <div className="forcastContainer">
        {forcastOfnext4daysData.map((data) => {
          return <ForcastCard key={uuidv4()} data={data} />;
        })}
      </div>
    </div>
  );
};

export default ForcastOf4Days;
