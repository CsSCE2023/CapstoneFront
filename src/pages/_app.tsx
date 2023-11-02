import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "f6ad9e27-c87b-4579-b1fe-b1825f5de726",
  clientToken: "pub027f750930bbecccf7191c56e9a949a2",
  site: "us5.datadoghq.com",
  service: "capstone-fe",
  env: "staging",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
