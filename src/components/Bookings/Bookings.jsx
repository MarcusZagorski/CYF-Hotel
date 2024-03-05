import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import { useEffect, useState } from "react";

const Bookings = () => {
  useEffect(() => {});
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);
  // useEffect(() => {
  //   fetch("https://api.tvmaze.com/shows/22/episodes")
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // });

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
