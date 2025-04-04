import React, { ReactNode } from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Head from "next/head";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Riza Pranata | Home Page",
  description: "Portfolio Riza Pranata",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <metadata />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
