import GlobalStyle from "../styles";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
