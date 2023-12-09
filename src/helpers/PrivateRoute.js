"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const router = useRouter();
  const { accessToken } = useSelector((state) => state?.auth);

  if (accessToken) {
    return null;
  } else {
    return router.replace(`/login`);
  }
}

export default PrivateRoute;
