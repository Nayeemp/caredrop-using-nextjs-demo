import CreateArticles from "@/Components/CreateArticles/CreateArticles";
import { cookies } from "next/headers";

export const metadata = {
  title: "Create Article",
  description: "This is Create Article page",
};

export default function CreateArticle() {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // console.log('access_token = ', access_token);
  return access_token?.value ? (
    <CreateArticles />
  ) : (
    <div className="container">you do not have access</div>
  );
}
