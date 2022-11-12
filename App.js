import { NavigationContainer } from "@react-navigation/native"
import { Navigation } from "./src/navigation/Navigation";
import axios from "axios";

axios.defaults.baseURL="https://api.themoviedb.org/3/movie"
axios.defaults.params={
  api_key:"cb286174d13b4855ae5de3db605f4623",
  lenguage:"es-ES"
}



export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

