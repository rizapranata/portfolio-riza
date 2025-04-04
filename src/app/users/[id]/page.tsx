import Layout from "@/components/Layout/page";
import React from "react";

interface UserDetailProps {
  params: {
    id: string;
  };
}

export default async function UserDetail({ params }: UserDetailProps) {
  const { id } = await params;
  return (
    <Layout>
      <div>
        <p>User Detail Page {id}</p>
      </div>
    </Layout>
  );
}
