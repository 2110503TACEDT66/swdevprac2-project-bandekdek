import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function user() {
  const session = await getServerSession(authOptions);

  var profile, createdAt;
  if (session) {
    console.log(session);

    profile = await getUserProfile(session.user.token);
    createdAt = new Date(profile.data.createdAt);
  }
  return (
    <>
      {session && (
        <main className="p-5 m-5 bg-slate-100">
          <div className="text-2xl">{profile.data.name}</div>
          <table className="border-separate table-auto border-spacing-2">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{profile.data.email}</td>
              </tr>
              <tr>
                <td>Tel.</td>
                <td>{profile.data.telephone}</td>
              </tr>
              <tr>
                <td>Member Since</td>
                <td>{createdAt?.toString()}</td>
              </tr>
            </tbody>
          </table>
        </main>
      )}
    </>
  );
}
