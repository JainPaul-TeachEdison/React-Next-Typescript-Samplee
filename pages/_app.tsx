import type { AppProps } from "next/app";
import { MyContextProvider } from "@/contexts/MyContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}
