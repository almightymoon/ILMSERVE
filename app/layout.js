import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "./Contexts/SessionContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <Toaster /> 

        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
