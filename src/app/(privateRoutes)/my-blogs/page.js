import { cookies } from "next/headers";
import MyBlogs from "./MyBlogs";

export default function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // console.log("access_token = ", access_token);
  console.log("access_token = ", access_token.value);

  return (
    <>
      <div className="container">
        <div>This is my-blogs page</div>
        <MyBlogs />
      </div>
    </>
  );
}
