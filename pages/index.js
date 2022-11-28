import React from "react";
import Router from "next/router";
import Map from "./map";

export default function Index() {
  React.useEffect(() => {
    Router.push("./Home");
  });

  return <div />;
}
