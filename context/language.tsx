import * as React from "react";

interface ILanguageContextProvider {
  children: any;
}

const language: string = "";
const selectLanguage = (user: string) => {
  console.log(user);
};

export const LanguageContext = React.createContext({
  language,
  selectLanguage,
});

export const LanguageContextProvider = ({
  children,
}: ILanguageContextProvider) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("EN");

  return (
    <LanguageContext.Provider
      value={{
        language: selectedLanguage,
        selectLanguage: setSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
