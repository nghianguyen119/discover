import NxWelcome from './nx-welcome';
import { ThemeProvider } from '@.//lib-one';
import MyApp from './try';
export function App() {
  return (
    <>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
      <div />
    </>
  );
}

export default App;
