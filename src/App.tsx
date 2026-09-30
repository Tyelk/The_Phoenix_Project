import type { JSX } from "react/jsx-runtime";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Home from "./components/Home";

export default function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <Home />
      <PageFooter />
    </>
  );
}
