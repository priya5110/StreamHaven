// POST API
import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Account from "@/models/Account";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { name, pin, uid } = await req.json();

    const isAccountAlreadyExists = await Accoiunt.find({ uid, name });

    if (isAccountAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "Please try with a different name",
      });
    }

    const allAccounts = await Account.find({});

    if (allAccounts && allAccounts.length === 4) {
      return NextResponse.json({
        success: false,
        message: "You can only add max 4 accounts",
      });
    }

    const hasPin = await has(pin, 12);

    const newlyCreatedAccount = await Account.create({
      name,
      pin: hashPin,
      uid,
    });

    if (newlyCreatedAccount) {
      return NextResponse.json({
        success: true,
        message: "Account created successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went Wrong",
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
