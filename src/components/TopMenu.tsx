import TopMenuItem from "./TopMenuItem";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  const iconColor = session ? "#F00" : "#FFF";

  return (
    <div className="navbar bg-black/[0.6] justify-between fixed top-0 z-30 border-solid border-black border-2">
      <div className="flex flex-row sm:ml-3 ml-0">
        <TopMenuItem title="Car catalogs" item="Cars" pageRef="/cars" />
        <TopMenuItem title="Shop catalogs" item="Shops" pageRef="/shops" />

        {session ? (
          <TopMenuItem
            title="Sign out"
            item="Sign out"
            pageRef="/api/auth/signout"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row mr-3 sm:mr-0">
        <TopMenuItem
          title="Home page"
          item={<HomeIcon sx={{ color: "#FFF" }} fontSize="large" />}
          pageRef="/"
        />
        <TopMenuItem
          title="User page"
          item={<PermIdentityIcon sx={{ color: iconColor }} fontSize="large" />}
          pageRef="/user"
        />
        <TopMenuItem
          title="Make Reservation"
          item={
            session ? (
              <MinorCrashIcon sx={{ color: iconColor }} fontSize="large" />
            ) : (
              <MinorCrashIcon sx={{ color: "#FFF" }} fontSize="large" />
            )
          }
          pageRef="/reservation"
        />
      </div>
    </div>
  );
}
