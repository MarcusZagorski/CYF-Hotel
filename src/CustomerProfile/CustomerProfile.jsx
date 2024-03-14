import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomerProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://favqs.come/api/`);
        if (!response.ok) {
          throw new Error("Failed to fetch customer profile");
        }
        const data = await response.json();
        setCustomerData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCustomerProfile();
    }
  }, [id]);

  return (
    <div>
      <button disabled={loading} onClick={() => setCustomerData(null)}>
        Show Profile
      </button>
      {loading && <span>Loading...</span>}
      {customerData && (
        <>
          <h2>Customer Profile</h2>
          <ul>
            <li>ID: {customerData.id}</li>
            <li>Email: {customerData.email}</li>
            <li>VIP: {customerData.isVip ? "Yes" : "No"}</li>
            <li>Phone Number: {customerData.phoneNumber}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default CustomerProfile;
