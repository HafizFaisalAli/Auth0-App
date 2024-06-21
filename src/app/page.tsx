"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Home = () => {
  const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // if (user) {
  //   console.log(user);
  //   return (
  //     <div>
  //       Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
  //       <br></br>
  //       Your nickname is {user.nickname}.
  //     </div>
  //   );
  // }
  return <Link href="/api/auth/login">Login</Link>;
};

export default Home;
