import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}{" "}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged In User Email: {session?.user?.email}{" "}
          </h1>
          <Image
            src={session?.user?.image}
            width={100}
            height={100}
            alt=""
            className="mx-auto rounded-full mt-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
