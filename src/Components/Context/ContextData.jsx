import axios from "axios";
import { createContext, useState } from "react";

export let ContextData = createContext();
export default function DataProvider({ children }) {
  const [expandData, setExpandData] = useState([]);
  const [CounterData, setCounterData] = useState([]);
  const [Services, setServices] = useState([]);
  const [TrustedByData, setTrustedBy] = useState([]);
  const [Projects, setProjects] = useState([]);
  const [Mission, setMission] = useState([]);
  const [Feedback, setFeedback] = useState([]);

  async function GetData() {
    const { data } = await axios.get("../data.json");
    setExpandData(data.sectionsMission);
  }
  async function GetCounter() {
    const { data } = await axios.get("../data.json");
    setCounterData(data.CounterData);
  }
  async function GetServices() {
    const { data } = await axios.get("../data.json");
    setServices(data.Services);
  }

  async function TrustedBy() {
    const { data } = await axios.get("../data.json");
    setTrustedBy(data.trustedBy);
  }
  async function GetPrjocts() {
    const { data } = await axios.get("../data.json");
    setProjects(data.Projects);
  }
  async function MissionAndVision() {
    const { data } = await axios.get("../data.json");
    setMission(data.OurVisionAndMission);
  }
  async function getFeedBack() {
    const { data } = await axios.get("../data.json");
    setFeedback(data.feedback);
  }
  return (
    <ContextData.Provider
      value={{
        getFeedBack,
        Feedback,
        expandData,
        GetData,
        CounterData,
        GetCounter,
        GetServices,
        Services,
        GetPrjocts,
        Projects,
        TrustedBy,
        TrustedByData,
        MissionAndVision,
        Mission,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
