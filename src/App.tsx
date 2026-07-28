import "./App.css";
import CountriesVisited from "./components/CountriesVisited";
import CurrentDate from "./components/CurrentDate";
import Profile from "./components/Profile";

type Country = {
  name: string;
  rating: number;
};

function App() {
  const today = new Date().toLocaleDateString("en-US");

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "female" as const,
  };

  const countriesVisited: Country[] = [
    { name: "Spain", rating: 7 },
    { name: "Brazil", rating: 7 },
    { name: "Japan", rating: 7 },
  ];

  return (
    <main className="app">
      <CurrentDate date={today} />

      <Profile
        name={user.name}
        email={user.email}
        gender={user.gender}
      />

      <CountriesVisited countries={countriesVisited} />
    </main>
  );
}

export default App;