import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import Header from "./Header";
import Books from "./Books";
import { CurrencyContext } from "./CurrencyContext";
const DATA = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99,
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99,
  },
];

function App() {
  return (
    <div>
      <Header />
      <MovieProvider>
        <MovieList />
      </MovieProvider>

      <div>
        <CurrencyContext.Provider value="$">
          <Books list={DATA} />
        </CurrencyContext.Provider>
      </div>
    </div>
  );
}

export default App;
