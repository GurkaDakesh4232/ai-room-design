import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user } = await req.json();

  try {
    // Check if user already exists
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
    console.log("User", userInfo);

    // If user does not exist, add the new user to the database
    if (userInfo?.length === 0) {
      const SaveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning(); // Assuming you want the inserted user object back
      return NextResponse.json({ result: SaveResult[0].Users });
    }

    // If user exists, return the existing user data
    return NextResponse.json({ result: userInfo[0] });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
