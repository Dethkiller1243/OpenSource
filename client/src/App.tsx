import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PaywallProvider } from "./contexts/PaywallContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import YouTubeGrowth from "./pages/YouTubeGrowth";
import Payment from "./pages/Payment";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/services/youtube-growth"} component={YouTubeGrowth} />
      <Route path={"/payment"} component={Payment} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <PaywallProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </PaywallProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
