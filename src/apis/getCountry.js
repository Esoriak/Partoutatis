const getCountry = async() => {
  // todo passer le offset dyn en params
  const response = await fetch(
    'https://example.com/countries?offset=0&limit=20',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    },
  ).then()
   .catch(err => {
    if (err.message === "Network request failed"){
      return err.message
    }
  }); 
  if (response !== "Network request failed"){
    const data = await response.json()
    return data

  };
};

export default getCountry;
