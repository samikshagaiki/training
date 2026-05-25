function ProfileCard() {

  const name = "Samiksha";
  const age = 20;
  const isStudent = true;
  const hasFees = true;

 
  const city = "Nagpur";
  const marks = 75;

  return (
    <>

      <h2>{name.toUpperCase()}</h2>

    
      <p>Age: {age}</p>

      
      {
        isStudent ? (
          <p>Currently Studying</p>
        ) : (
          <p>Working Professional</p>
        )
      }

      
      {
        hasFees && <button>Pay Fees</button>
      }

      
      <p>Hello {name}, from {city}</p>

      
      {
        marks >= 40 ? (
          <p>Passed</p>
        ) : (
          <p>Failed</p>
        )
      }

    </>
  );
}

export default ProfileCard;