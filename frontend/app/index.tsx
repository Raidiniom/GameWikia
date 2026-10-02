import { Redirect } from 'expo-router';

// The "/" route decides where the user starts.
// TODO: once Supabase auth is wired up, redirect signed-in users to "/home".
export default function Index() {
  return <Redirect href="/login" />;
}
