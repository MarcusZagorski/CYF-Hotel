import { useState } from "react";

const CustomerProfile = ({ id }) => {
  const [showingProfile, setShowingProfile] = useState(false);

  const handleCustomerID = () => {
    setShowingProfile((showingProfile) => !showingProfile);
  };

  const changeShowProfileState = showingProfile ? `Customer ${id} profile` : "";

  return (
    <>
      <button onClick={handleCustomerID}>Show Profile</button>
      <span>{changeShowProfileState}</span>
    </>
  );
};

export default CustomerProfile;
