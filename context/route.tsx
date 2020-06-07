import * as React from "react";

interface IRouteContextProvider {
  children: any;
}

const route: string = "";
const selectRoute = (route: string) => {
  console.log(route);
};

const RouteContext = React.createContext({
  route,
  selectRoute,
});

export const RouteContextProvider = ({ children }: IRouteContextProvider) => {
  const [selectedRoute, setSelectedRoute] = React.useState("");

  return (
    <RouteContext.Provider
      value={{
        route: selectedRoute,
        selectRoute: setSelectedRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
export default RouteContext;
