import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users </h1>
      <Link href="/users/new" className="btn bg-slate-200 mb-4">
        NEW USER
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
