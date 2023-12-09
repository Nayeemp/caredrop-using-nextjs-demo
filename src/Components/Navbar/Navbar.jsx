'use client';

import useLocalPropertiesCheck from '@/Hook/useLocalPropertiesCheck';
import { useLogoutMutation } from '@/Redux/features/auth/authApi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const localPropertiesChecked = useLocalPropertiesCheck();
  const { accessToken } = useSelector((state) => state.auth);
  const [logout, { isSuccess, isLoading }] = useLogoutMutation();

  const pathname = usePathname();
  // console.log("pathname = ", pathname);

  // useEffect(() => {
  //   console.log("mounting");
  // });

  return (
    <header className="bg-slate-100 flex justify-center items-center shadow-md px-7 mb-5">
      <Link
        href="/"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === '/' && 'bg-green-400'
        }`}
      >
        Home
      </Link>

      <Link
        href="/articles"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === '/articles' && 'bg-green-400'
        }`}
      >
        Articles
      </Link>

      <Link
        href="/create-article"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === '/create-article' && 'bg-green-400'
        }`}
      >
        Create Article
      </Link>

      <Link
        href="/my-blogs"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === '/my-blogs' && 'bg-green-400'
        }`}
      >
        My blogs
      </Link>

      {!accessToken && (
        <Link
          href="/login"
          className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
            pathname === '/login' && 'bg-green-400'
          }`}
        >
          Login
        </Link>
      )}

      {accessToken && (
        <div
          className="py-3 px-5 hover:bg-gray-300 cursor-pointer border-x"
          onClick={() => !isLoading && logout()}
          // onClick={() => localStorage.clear()}
        >
          Log Out
        </div>
      )}
    </header>
  );
}

export default Navbar;
