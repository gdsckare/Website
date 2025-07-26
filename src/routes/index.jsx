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
import GitWorkshopDesc from "../components/events/git-workshop/GitWorkshopDesc";
import GitWorkshopRegistration from "../components/events/git-workshop/GitWorkshopRegistration";
import NlpWorkshopDesc from "../components/events/nlp-workshop/NlpWorkshopDesc";
import NlpWorkshopRegistration from "../components/events/nlp-workshop/NlpWorkshopRegistration";

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
      {
        path: "git-workshop",
        element: <GitWorkshopDesc />,
      },
      {
        path: "git-workshop/register",
        element: <GitWorkshopRegistration />,
      },
      {
        path: "nlp-workshop",
        element: <NlpWorkshopDesc />,
      },
      {
        path: "nlp-workshop/register",
        element: <NlpWorkshopRegistration />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
