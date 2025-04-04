'use client'

import React from "react";
import { useRouter } from "next/navigation";

interface ListUserProps {
  params: {
    id: string;
    name: String;
  };
}

export default function ListUsers({ params }: ListUserProps) {
  const router = useRouter();

  return <div key={params?.id} onClick={() => router.push(`/users/${params.id}`)}>
    <p>{params.name}</p>
  </div>;
}
