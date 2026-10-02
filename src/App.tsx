import type { JSX } from "react/jsx-runtime";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";
import ChatBotPopup from "./components/ChatBotPopup";

export default function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <Home />
      <ChatBotPopup />
      <PageFooter />
    </>
  );
}
