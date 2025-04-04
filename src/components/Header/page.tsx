import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <div className="flex justify-between max-w-full bg-amber-400 p-5 mx-30">
          <div className="">
            <Link href="/">Riza Pranata</Link>
          </div>
          <ul className="flex justify-end gap-x-3.5 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
