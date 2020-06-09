import * as React from "react";

interface IScreenWidthContextProvider {
  children: any;
}

const windowSize: number = 0;

const ScreenWidthContext = React.createContext({
  windowSize,
});

export const ScreenWidthContextProvider = ({
  children,
}: IScreenWidthContextProvider) => {
  const [screenWidth, setScreenWidth] = React.useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [screenWidth]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider
      value={{
        windowSize: screenWidth,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};
export default ScreenWidthContext;
