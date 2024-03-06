import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const handleSearch = (searchInput) => {
    bookings.filter((booking) => {
      if (
        booking.firstName === searchInput ||
        booking.surname === searchInput
      ) {
        setBookings([booking]);
      }
    });
  };

  return (
    <main className="bookings">
      <Search onSearchSubmit={handleSearch} />
      <SearchResults results={bookings} />
      {console.log(bookings)}
    </main>
  );
};

export default Bookings;
