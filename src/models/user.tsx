interface User {
  map(arg0: (data: User, index: number) => JSX.Element): React.ReactNode;
  user_id: number;
  role_name: number;
  name: string;
  username: string;
  email: string;
  gender: string;
  dob: string | number;
  image: string;
  id: number;
  role_id: number;
  status_id: number;
  address: string;
  startYear: string;
  endYear: string;
  phone: string;
  action: string;
  data: [];
  per_page: string | number;
  total: string | number;
  length: string | number;
}
