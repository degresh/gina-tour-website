import { getAccountByEmail } from "@/app/lib/database/account";
import { signToken } from "@/app/util/jwt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  console.log(req.body)

  const user = await getAccountByEmail(email);

  if (user) {
    const token = signToken({ id: user.id, username: user.email });
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/;`);
    return NextResponse
      .json({ message: 'Logged in' }, { status: 200 })
      .cookies.set('Set Cookie', `token=${token}; HttpOnly; Path=/;`)
  } else {
    return NextResponse
      .json({ message: 'Invalid credentials' }, { status: 404 });
  }
}