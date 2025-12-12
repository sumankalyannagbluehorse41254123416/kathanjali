import CategoryPills from '@/components/fillter'
import PostCard from '@/components/PostCard'
import Header from '@/components/header'
import React from 'react'
import './globals.css';
import Urmila from '@/components/urmila';
import Diwali from '@/components/diwali';
import Durga from '@/components/durga';
import India from '@/components/india';
import Theman from '@/components/theman';
import Khudiram from '@/components/khudiram';
import Laxmibai from '@/components/Laxmibai';
import Barbarik from '@/components/barbarik';
import Mahabharata from '@/components/mahabharat';
import Alexander from '@/components/alexender';
import Theworld from '@/components/theworld';
import Thebench from '@/components/thebench';
import Thebenchpost from '@/components/thebenchpost';
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

// Helper to clean HTML tags
const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function homPage() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "5168a6e6-91c7-437b-aac5-d8b57c7ed2ef"
    );
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Prevent error if empty
  const firstSection = sections[0] || {};

  return (
    <>
      <Header />
      <CategoryPills />

      {/* ⬇️ DYNAMIC POSTCARD - USING SECTION[0] */}
      <PostCard
        image={firstSection.image || "/default.jpg"}
        shortDescription={stripHtml(firstSection.shortDescription || "")}
      />

      {/* Rest of your components */}
      <Urmila />
      <Diwali />
      <Durga />
      <India />
      <Theman />
      <Khudiram />
      <Laxmibai />
      <Barbarik />
      <Mahabharata />
      <Alexander />
      <Theworld />
      <Thebench />
      <Thebenchpost />
    </>
  );
}
