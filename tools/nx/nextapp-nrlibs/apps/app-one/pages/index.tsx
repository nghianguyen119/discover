import { Button, ThemeProvider } from '@nextapp-nrlibs/lib-one';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
      <ThemeProvider>
        <Button variant="contained">Hello</Button>
      </ThemeProvider>
    </>
  );
}

export default Index;
