"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";


//Component created by Sanity to have customizable products and data
export default function Studio() {
  return <NextStudio config={config} />;
}