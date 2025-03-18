export type Team = {
  teamId: number;
  teamName: string;
};

export type Bowler = {
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit?: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId?: number;
  Team?: Team | null; // Make sure Team is nullable
};
