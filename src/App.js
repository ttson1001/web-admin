// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { Notification } from './components/Notification';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Notification />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
