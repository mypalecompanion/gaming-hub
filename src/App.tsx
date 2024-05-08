import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    <Grid
      templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"blueviolet"}>
          ASIDE
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"lavender"}>
        MAIN
      </GridItem>
    </Grid>
  );
};

export default App;
