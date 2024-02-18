import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Account from "@/models/Account";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Account ID is mandatory",
      });
    }

    const deleteAccount = await Account.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        success: true,
        message: "Account Delete Successfully",
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
