// Placeholder for AI integration
// Later we can connect to an AI API using axios or an SDK

exports.getCropAdvice = async (soilType, climate, season) => {
  // For now, return mock advice
  // Later: send these params to AI API and return the response
  return {
    recommendedCrops: ['Maize', 'Cassava', 'Groundnuts'],
    notes: `Based on ${soilType} soil, ${climate} climate, and ${season} season, 
            these crops are optimal for yield and market demand.`
  };
};