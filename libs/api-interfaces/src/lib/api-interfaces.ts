export interface Message {
  message: string;
}

export interface Member {
  id: number;
  name: string;
  birthdate?: Date;
}

export interface Dzemat {
  name: string;
  members: Member[];
}
