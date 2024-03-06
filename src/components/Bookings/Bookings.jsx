import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import { useEffect, useState } from "react";

const Bookings = () => {
  useEffect(() => {});

  const [bookings, setBookings] = useState(FakeBookings);
  // useEffect(() => {
  //   fetch("https://api.tvmaze.com/shows/22/episodes")
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // });
  const handleSearch = (searchInput) => {
    console.log(searchInput);
  };

  return (
    <main className="bookings">
      <Search onSearchSubmit={handleSearch} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
