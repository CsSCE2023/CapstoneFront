import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="flex w-full justify-between">
    <div className="mt-2">
      {" "}
      <Image
        src={"/logo.png"}
        alt="Picture of the author"
        width={100}
        height={200}
        style={{ width: "200%" }}
      />
    </div>
    <div className="flex flex-end">
      <Link id="login" href="/login">
        <button
          style={{ backgroundColor: "orange" }}
          className="text-white my-2 mx-2 h-7 bg-#ea580c hover:bg-#ea580c focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
      </Link>

      <button
        style={{ backgroundColor: "orange" }}
        className="text-white my-2 h-7 bg-#ea580c hover:bg-#ea580c focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </div>
  </div>
);

export default Header;
