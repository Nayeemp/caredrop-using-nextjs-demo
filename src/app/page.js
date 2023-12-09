import Button from "@/Components/Button/Button";
import PopularArticles from "./PopularArticles";

export default function Home() {
  console.log("in Home");
  return (
    <div className="container h-[100vh] w-[100vw]">
      <PopularArticles />
    </div>
  );
}
