"use client";

import { authenticate } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";

export default function LoginForm() {

  const [errorMessage, formAction, isPending] = useActionState(
      authenticate,
      undefined,
  );

  return (
    <form action={formAction} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
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
              Log in
          </div>
      </Button>
    </form>
  );
};
