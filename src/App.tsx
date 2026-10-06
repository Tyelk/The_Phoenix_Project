import type { JSX } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";
import ChatBotPopup from "./components/ChatBotPopup";
import Donate from "./components/Donate";
import Content from "./components/ContentPage";
import PageSearch from "./components/PageSearch";
import NotFound from "./components/NotFound";
import QuizGame from "./components/QuizGame";
import ScrollToTop from "./components/ScrollToPageTop";

const HomePage = () => {
  return <Home />;
};

const DonatePage = () => {
  return <Donate />;
};

const ProstateInfoContentPage = () => {
  return <Content pageType="pi" />;
};

const GetSupportContentPage = () => {
  return <Content pageType="gs" />;
};

const GetInvolvedContentPage = () => {
  return <Content pageType="gi" />;
};

const EducationAndOutreachContentPage = () => {
  return <Content pageType="eo" />;
};

const ResearchContentPage = () => {
  return <Content pageType="r" />;
};

const PageSearchPage = () => {
  return <PageSearch />;
};

const QuizGamePage = () => {
  return <QuizGame />;
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <PageHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route
          path="/prostate-information"
          element={<ProstateInfoContentPage />}
        />
        <Route path="/get-support" element={<GetSupportContentPage />} />
        <Route path="/get-involved" element={<GetInvolvedContentPage />} />
        <Route
          path="/education-and-outreach"
          element={<EducationAndOutreachContentPage />}
        />
        <Route path="/research" element={<ResearchContentPage />} />

        <Route path="/search" element={<PageSearchPage />} />
        <Route path="/play" element={<QuizGamePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ChatBotPopup />
      <PageFooter />
    </BrowserRouter>
  );
}
