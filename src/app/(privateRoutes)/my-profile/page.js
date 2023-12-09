import { cookies } from "next/headers";
import PrivateRoute from "@/helpers/PrivateRoute";
import MyProfile from "./MyProfile";

export default function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // console.log('access_token = ', access_token.value);

  return access_token?.value ? (
    <>
      <div className="container">
        <div>Your Profile</div>
        <MyProfile></MyProfile>
        <PrivateRoute />
      </div>
    </>
  ) : (
    <div className="container">you do not have access</div>
  );
}
