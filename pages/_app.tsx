import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";

const MyApp = ({ Component, pageProps }: AppProps) => (
  // <RecoilRoot>
  <Component {...pageProps} />
  // </RecoilRoot>
);

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
