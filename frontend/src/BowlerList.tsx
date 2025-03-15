import { useState } from 'react';
import { bowlers } from './types/bowlers';
import { teams } from './types/teams';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowlers[]>([]);
  const [teams, setTeams] = useState<teams[]>([]);

  const fetchBowlers = async () => {
    const response = await fetch('https://localhost:7271/MarriottFood');
    const data = await response.json();
    setBowlers(data);
  };

  const fetchTeams = async () => {
    const response = await fetch('https://localhost:7271/MarriottFood');
    const data = await response.json();
    setTeams(data);
  };

  fetchBowlers();
  fetchTeams();

  return (
    <>
      <h1>Bowlers</h1>
      <table>
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
          {bowlers.map((b) => (
            <tr key={b.BowlerID}>
              <td>
                {b.BowlerFirstName} {b.BowlerMiddleInit} {b.BowlerLastName}
              </td>
            </tr>
          ))}
          {teams.map((t) => (
            <tr key={t.TeamID}>
              <td>{t.TeamName}</td>
            </tr>
          ))}
          {bowlers.map((bo) => (
            <tr key={bo.BowlerID}>
              <td>{bo.BowlerAddress}</td>
              <td>{bo.BowlerCity}</td>
              <td>{bo.BowlerState}</td>
              <td>{bo.BowlerZip}</td>
              <td>{bo.BowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
