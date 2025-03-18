import { useState, useEffect } from 'react';
import { Bowler } from './types'; // Import the types

function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await fetch('https://localhost:5000/Bowler');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const rawData = await response.json();
        console.log('Raw API Data:', rawData); // Debugging

        // Ensure correct extraction of data
        const data: Bowler[] = rawData.$values || [];
        console.log('Processed Bowlers:', data); // Debugging

        // ✅ Filter to include ONLY "Marlins" or "Sharks"
        const filteredBowlers = data.filter(
          (b) =>
            b.teamName && (b.teamName === 'Marlins' || b.teamName === 'Sharks')
        );

        console.log('Filtered Bowlers:', filteredBowlers); // Debugging

        setBowlers(filteredBowlers);
      } catch (error) {
        console.error('Error fetching bowlers:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBowlers();
  }, []);

  if (loading) {
    return <p>Loading bowlers...</p>;
  }

  if (error) {
    return <p>Error loading bowlers: {error}</p>;
  }

  return (
    <>
      <h2>Bowlers Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.length > 0 ? (
            bowlers.map((b, index) => {
              console.log(`Rendering row ${index}:`, b); // Debugging
              return (
                <tr key={b.bowlerId}>
                  <td>
                    {b.bowlerFirstName} {b.bowlerMiddleInit || ''}{' '}
                    {b.bowlerLastName}
                  </td>
                  <td>{b.teamName || 'No Team'}</td>
                  <td>{b.bowlerAddress}</td>
                  <td>{b.bowlerCity}</td>
                  <td>{b.bowlerState}</td>
                  <td>{b.bowlerZip}</td>
                  <td>{b.bowlerPhoneNumber}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7}>No bowlers available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
