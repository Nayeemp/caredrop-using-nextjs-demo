import CreateArticles from '@/Components/CreateArticles/CreateArticles';
import { cookies } from 'next/headers';

export default function CreateArticle() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  console.log('access_token = ', access_token);
  return access_token?.length ? (
    <CreateArticles />
  ) : (
    <div className="container">you don't have access</div>
  );
}
