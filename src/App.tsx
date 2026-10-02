import type { JSX } from "react/jsx-runtime";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";
import ChatBotPopup from "./components/ChatBotPopup";
import Donate from "./components/Donate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = () => {
  return <Home />;
};

const DonatePage = () => {
  return <Donate />;
};

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PageHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>

      <ChatBotPopup />
      <PageFooter />
    </BrowserRouter>
  );
}
