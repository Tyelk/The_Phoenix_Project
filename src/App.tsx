import type { JSX } from "react/jsx-runtime";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";
import ChatBotPopup from "./components/ChatBotPopup";
import Donate from "./components/Donate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";

const HomePage = () => {
  return <Home />;
};

const DonatePage = () => {
  return <Donate />;
};

const ContentPage = () => {
  return <Content />;
};

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PageHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/prostate-information" element={<ContentPage />} />
      </Routes>

      <ChatBotPopup />
      <PageFooter />
    </BrowserRouter>
  );
}
