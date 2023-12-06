/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import imagePlaceHolder from "../../../public/Assets/Components/CreateArticles/image_placeHolder.png";
import CreateArticlesFromTitle from "./CreateArticlesFromTitle";
import Image from "next/image";

const modules = {
  toolbar: [
    [{ align: [] }], // align content
    ["bold", "italic", "underline"], // toggled buttons
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }],
    ["link", "image"],
  ],
}; // UIতে কি কি toolbar show করবে

const formats = [
  "align",
  "bold",
  "italic",
  "underline",
  "header",
  "color",
  "link",
  "image",
]; // UIএর toolbar কে ফাংশনাল করার জন্য
// string ae extra specing thakle kaj korbe na

function CreateArticles() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [textEditorValue, setTextEditorValue] = useState("");
  // const [successMsg, setSuccessMsg] = useState(false)

  const clearFrom = () => {
    setTitle("");
    setTopic("");
    setKeywords("");
    setCoverImage("");
    setTextEditorValue("");
  };

  // useEffect(() => {
  //   if (successMsg) {
  //     setSuccessMsg(false);
  //     clearFrom()
  //   }
  // }, [successMsg])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title?.trim()) {
      return console.log("title is required");
    }

    if (!textEditorValue?.trim()) {
      return console.log("textEditorValue is required");
    }

    if (!topic?.trim()) {
      return console.log("topic is required");
    }

    if (!coverImage) {
      return console.log("coverImage is required");
    }

    if (!keywords?.trim()) {
      return console.log("keywords is required");
    }

    console.log("title = ", title);
    console.log("textEditorValue = ", textEditorValue);
    console.log("topic = ", topic);
    console.log("keywords= ", keywords);
    console.log("coverImage= ", coverImage);
    clearFrom();
  };

  return (
    <>
      <div className="container py-[50px] bg-white">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-y-[30px] md:gap-y-[50px]"
        >
          <div>
            <CreateArticlesFromTitle>Title</CreateArticlesFromTitle>
            <div className="">
              <input
                type="text"
                placeholder="Article title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-full w-full bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <CreateArticlesFromTitle>Article</CreateArticlesFromTitle>
            <div>
              <ReactQuill
                theme="snow"
                value={textEditorValue}
                onChange={setTextEditorValue}
                placeholder="Write your article here..."
                modules={modules}
                formats={formats}
              />
            </div>
          </div>

          <div>
            <CreateArticlesFromTitle>Select Topics</CreateArticlesFromTitle>
            <div className="">
              <select
                className="w-full rounded-lg bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 flex"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                <option value="">Select topics</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div>
            <CreateArticlesFromTitle>Document</CreateArticlesFromTitle>

            <label className="bg-[#F5F5F5] py-[87px] flex justify-center items-center w-full rounded-lg cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-y-[10px]">
                <Image
                  src={imagePlaceHolder}
                  alt="image_placeHolder"
                  className="w-[55px] h-[55px]"
                />
                <div className="text-xs font-normal text-[#757575] leading-[14.32px]">
                  Add article cover image...
                </div>
                <div className="text-xs font-normal  leading-[14.32px]">
                  <span className="font-semibold">Chosen file:</span>{" "}
                  {coverImage?.name ? coverImage.name : "No Image chosen yet"}
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </label>
          </div>

          <div>
            <CreateArticlesFromTitle>Add Keywords</CreateArticlesFromTitle>
            <div className="">
              <input
                type="text"
                placeholder="eg: corona, healthcare..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="h-full w-full bg-[#F5F5F5] text-[#757575] text-sm md:text-base lg:text-xl font-normal leading-[23.87px] p-5 rounded-lg"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArticles;
