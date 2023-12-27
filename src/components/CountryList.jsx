import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "../../starter/components/Spinner";
import Message from "../../starter/components/Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  console.log(cities);

  if (!cities.length) return <Message message="Country List Messagep" />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={Math.random() * 100} />
      ))}
    </ul>
  );
}

export default CountryList;
