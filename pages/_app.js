import GlobalStyle from "../styles";
import { Roboto_Flex } from "next/font/google";
import Header from "@/src/components/Header";
import React, { useState } from "react";
import { lightTheme, darkTheme } from "@/src/components/styles/themes";
import { ThemeProvider } from "styled-components";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
