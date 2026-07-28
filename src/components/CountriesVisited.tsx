type Country = {
  name: string;
  rating: number;
};

type CountriesVisitedProps = {
  countries: Country[];
};

function CountriesVisited({
  countries,
}: CountriesVisitedProps) {
  return (
    <section className="countries-section">
      <h2>Countries Visited</h2>

      <ul className="countries-list">
        {countries.map((country) => (
          <li key={country.name}>
            {country.name} - Rating: {country.rating}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountriesVisited;