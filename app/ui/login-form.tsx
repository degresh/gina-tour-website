"use client";

import { authenticate } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { revalidatePath } from "next/cache";
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {

    const [isPending, setIsPending] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    return (
        <form
            className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
            action={async (formData) => {
                const account =await authenticate(
                    formData.get("email").toString(),
                    formData.get("password").toString()
                );

                if (account) {
                    localStorage.setItem("token", encodeToBase64(JSON.stringify(account)));
                    router.push("/");
                    router.refresh()
                }

            }}
        >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => {
                        setFormData((prevState) => {
                            return {
                                ...prevState,
                                email: event.target.value
                            }
                        })
                    }}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    name="password"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <Button className="mt-4 w-full" aria-disabled={isPending}>
                <div className="w-full flex text-center">
                    {isPending ? "Loading" : "Login"}
                </div>
            </Button>
        </form>
    );
};
