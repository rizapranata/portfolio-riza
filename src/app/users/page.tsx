import Layout from "@/components/Layout/page";
import React, { Key } from "react";
import ListUsers from "./listUsers";

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  
  return (
    <Layout>
      <div className="mx-30">
        {dataUsers.map((user: { id: string; name: string }) => {
          return (
            <ListUsers params={{
              id: user.id,
              name: user.name,
            }} />
          );
        })}
      </div>
    </Layout>
  );
}
