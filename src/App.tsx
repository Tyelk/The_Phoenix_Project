import type { JSX } from "react/jsx-runtime";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";
import ChatBotPopup from "./components/ChatBotPopup";
import Donate from "./components/Donate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/ContentPage";
import PageSearch from "./components/PageSearch";
import NotFound from "./components/NotFound";

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

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PageHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route
          path="/prostate-information"
          element={<ProstateInfoContentPage />}
        />
        <Route path="/get-support" element={<GetSupportContentPage />} />
        <Route path="/search" element={<PageSearch />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ChatBotPopup />
      <PageFooter />
    </BrowserRouter>
  );
}
