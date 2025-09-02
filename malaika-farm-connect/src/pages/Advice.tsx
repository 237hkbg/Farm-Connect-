import React from "react";

const Advice: React.FC = () => {
  const marketCrops = [
    { name: "Tomatoes", price: 3, season: "Summer" },
    { name: "Potatoes", price: 2, season: "All Year" },
    { name: "Corn", price: 4, season: "Summer" },
    { name: "Carrots", price: 3, season: "Winter" },
  ];

  const recommended = marketCrops.filter(crop => crop.price <= 3); // simple logic: recommend affordable crops

  return (
    <div style={{ padding: "40px" }}>
      <h1>💡 Crop Recommendations</h1>
      <p>Based on price and availability, we recommend the following crops:</p>
      <ul>
        {recommended.map((crop, index) => (
          <li key={index}>
            {crop.name} - ${crop.price} ({crop.season})
          </li>
        ))}
      </ul>
      <p>Always consider seasonal crops for better quality and price!</p>
    </div>
  );
};

export default Advice;


