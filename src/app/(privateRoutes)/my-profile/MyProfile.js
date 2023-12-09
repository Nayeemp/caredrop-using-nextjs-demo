"use client";

import { useMyProfilePageUserProfileInfoQuery } from "@/Redux/features/MyProfilePage/MyProfilePageApi";
import { useEffect } from "react";

function MyProfile(props) {
  const { isLoading, isError, isSuccess, data, error } =
    useMyProfilePageUserProfileInfoQuery();

  useEffect(() => {
    if (isSuccess && data) {
      console.log("data = ", data);
    }
  }, [isSuccess, data]);

  return (
    <>
      <div className="text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-5xl xxl:text-6xl font-semibold text-primary leading-[30.6px] md:leading-[40.6px]  lg:leading-[50.6px] xl:leading-[65.6px] xxl:leading-[71.6px]">
        {data?.full_name ? data.full_name : "user"}
      </div>

      <div className="text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-5xl xxl:text-6xl font-semibold text-primary leading-[30.6px] md:leading-[40.6px]  lg:leading-[50.6px] xl:leading-[65.6px] xxl:leading-[71.6px]">
        {data?.email ? data.email : "email"}
      </div>
    </>
  );
}

export default MyProfile;
