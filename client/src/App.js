import { Grid } from "@material-ui/core";
import HomePage from "./homePage";

function App() {
  document.body.style.margin="0";
  document.body.style.padding="0";
  return (
    <Grid>
      <HomePage/>
    </Grid>
  );
}

export default App;
