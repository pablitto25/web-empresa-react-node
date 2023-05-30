import { createContext } from "react";


export const LangContext = createContext();


export const LanguageProvider = ({ children }) => {
    const initialLanguage = window.location.pathname;
    return <LangContext.Provider value={{ lg: initialLanguage }}>{children}</LangContext.Provider>
}