type ID = {
  _id: string;
};
export interface User {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
}
