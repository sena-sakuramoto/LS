import { useEffect, useLayoutEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CareersTop from "./pages/careers/CareersTop";
import JobList from "./pages/careers/JobList";
import JobDesigner from "./pages/careers/JobDesigner";
import JobSales from "./pages/careers/JobSales";
import JobPM from "./pages/careers/JobPM";
import Training from "./pages/careers/Training";
import InterviewList from "./pages/careers/InterviewList";
import InterviewDetail from "./pages/careers/InterviewDetail";
import Benefits from "./pages/careers/Benefits";
import Flow from "./pages/careers/Flow";
import Entry from "./pages/careers/Entry";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/careers">{() => <CareersTop />}</Route>
        <Route path="/careers/">{() => <CareersTop />}</Route>
        <Route path="/careers/job">{() => <JobList />}</Route>
        <Route path="/careers/job/">{() => <JobList />}</Route>
        <Route path="/careers/job/designer">{() => <JobDesigner />}</Route>
        <Route path="/careers/job/designer/">{() => <JobDesigner />}</Route>
        <Route path="/careers/job/sales">{() => <JobSales />}</Route>
        <Route path="/careers/job/sales/">{() => <JobSales />}</Route>
        <Route path="/careers/job/pm">{() => <JobPM />}</Route>
        <Route path="/careers/job/pm/">{() => <JobPM />}</Route>
        <Route path="/careers/training">{() => <Training />}</Route>
        <Route path="/careers/training/">{() => <Training />}</Route>
        <Route path="/careers/interview">{() => <InterviewList />}</Route>
        <Route path="/careers/interview/">{() => <InterviewList />}</Route>
        <Route path="/careers/interview/:name">{(params) => <InterviewDetail name={params.name} />}</Route>
        <Route path="/careers/interview/:name/">{(params) => <InterviewDetail name={params.name} />}</Route>
        <Route path="/careers/benefits">{() => <Benefits />}</Route>
        <Route path="/careers/benefits/">{() => <Benefits />}</Route>
        <Route path="/careers/flow">{() => <Flow />}</Route>
        <Route path="/careers/flow/">{() => <Flow />}</Route>
        <Route path="/careers/entry">{() => <Entry />}</Route>
        <Route path="/careers/entry/">{() => <Entry />}</Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
