import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Account from "@/models/Account";
import { compare } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { pin, account, uid } = await req.json();

    const getCurrentAccount = await Account.findOne({ _id: accountId, uid });

    if (!getCurrentAccount) {
      return NextResponse.json({
        success: false,
        message: "Account Not Found!",
      });
    }

    const checkPin = await compare(pin, getCurrentAccount.pin);

    if (checkPin) {
      return NextResponse.json({
        success: true,
        message: "Welcome to StreamHaven!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Incorrect Pin!",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong",
    });
  }
}
