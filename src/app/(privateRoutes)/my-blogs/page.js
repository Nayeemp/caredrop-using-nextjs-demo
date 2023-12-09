import { cookies } from 'next/headers';
import MyBlogs from './MyBlogs';

export default function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  // console.log('access_token = ', access_token.value);

  return access_token?.value ? (
    <>
      <div className="container">
        <div>Your Blogs are</div>
        <MyBlogs />
      </div>
    </>
  ) : (
    <div className="container">you don't have access</div>
  );
}
