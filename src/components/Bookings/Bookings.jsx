import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import CustomerProfile from "../../CustomerProfile/CustomerProfile";
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
        console.log(booking);
      }
    });
  };

  return (
    <main className="bookings">
      <Search onSearchSubmit={handleSearch} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
