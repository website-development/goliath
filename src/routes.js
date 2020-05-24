import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import IntroPage from "./pages/IntroPage";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import ListProjects from "./pages/ListProjects";
import NewProject from "./pages/NewProject";
import DragDrop from "./pages/DragDrop";
import Upload from "./pages/Upload";
import Done from "./pages/Done";
import Quality from "./pages/Quality";
import Enrichment from "./pages/Enrichment";
import Model from "./pages/Model";
import Simulation from "./pages/Simulation";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <Switch>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/projects" exact>
            <ListProjects />
          </Route>
          <Route path="/dragdrop" exact>
            <DragDrop />
          </Route>
          <Route path="/upload" exact>
            <Upload />
          </Route>
          <Route path="/projectHome" exact>
            <NewProject />
          </Route>

          <Route path="/projectQuality" exact>
            <Quality />
          </Route>

          <Route path="/done" exact>
            <Done />
          </Route>

          <Route path="/projectEnrichment" exact>
            <Enrichment />
          </Route>

          <Route path="/projectModel" exact>
            <Model />
          </Route>

          <Route path="/projectSimulation" exact>
            <Simulation />
          </Route>

          <Route path="/projectBusiness" exact />

          <Route path="/admin" exact></Route>
          <Route path="/billing" exact></Route>
          <Route path="/support" exact></Route>

          <Redirect to="/home" />
        </Switch>
      </>
    );
  }

  return (
    <Switch>
      <Route path="/intro" exact>
        <IntroPage />
      </Route>
      <Route path="/auth" exact>
        <FormPage />
      </Route>
      <Redirect to="/intro" />
    </Switch>
  );
};
