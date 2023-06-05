import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubscription = (duration) => {
    const currentDate = new Date();
    setStartDate(currentDate);

    let endDate;
    if (duration === '1month') {
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    } else if (duration === '3months') {
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate());
    } else if (duration === '6months') {
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate());
    }

    setEndDate(endDate);

    // Send API request with startDate and endDate
    // Your API request code here
  };

  return (
    <div>
      <button onClick={() => handleSubscription('1month')}>1 Month Subscription</button>
      <button onClick={() => handleSubscription('3months')}>3 Months Subscription</button>
      <button onClick={() => handleSubscription('6months')}>6 Months Subscription</button>

      {startDate && endDate && (
        <div>
          <p>Start Date: {startDate.toDateString()}</p>
          <p>End Date: {endDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
