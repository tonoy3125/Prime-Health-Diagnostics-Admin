import SignIn from "../../PublicPages/SignIn/SignIn";
import SignUp from "../../PublicPages/SignUp/SignUp";

const PublicRoutes = [
  {
    path: "admin/signin",
    element: <SignIn />,
  },
  {
    path: "admin/signup",
    element: <SignUp />,
  },
];

export default PublicRoutes;
