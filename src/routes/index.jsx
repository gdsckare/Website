import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Events from "../components/Events";
import Team from "../components/Team";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import JoinUs from "../components/JoinUs";
import About from "../components/About";
import EventDescription from "../components/events/euphoria/EventDescription";
import EventRegistration from "../components/events/solution-challenge-workshop/EventRegistration";
import SolWorkshopDesc from "../components/events/solution-challenge-workshop/SolWorkshopDesc";
import StudyJam1 from "../components/events/Past_events/Study_jam1";
import StudyJam2 from "../components/events/Past_events/Study_jam2";
import BWAI from "../components/events/Past_events/Build_with_Ai";
import Gen_Ai_Workshop from "../components/events/Past_events/Gen_Ai";

import Inventia_Hackathon from "../components/events/Past_events/Inventia_Hack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "join",
        element: <JoinUs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "euphoria-2025/register",
        element: <EventDescription />,
      },
      {
        path: "solution-challenge-workshop",
        element: <EventRegistration />,
      },
      {
        path: "solution-challenge-workshop/details",
        element: <SolWorkshopDesc />,
      },
     {path:"/Study_jam1",element:<StudyJam1 />},
     {path:"/Study_jam2",element:<StudyJam2 />},
     {path:"/Build_with_Ai",element:<BWAI />},
     {path:"/Gen_Ai",element:<Gen_Ai_Workshop />},
     {path:"/Inventia_Hack",element:<Inventia_Hackathon />},
     
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
