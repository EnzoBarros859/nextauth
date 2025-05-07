/**
 * User Registration API Route
 * 
 * Handles new user registration requests. Validates user input,
 * checks for existing users, and creates new user accounts.
 * 
 * @route POST /api/register
 * @param {Request} req - The incoming request object
 * @returns {Promise<NextResponse>} JSON response with user data or error message
 */

import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/client";
import { createUserSchema } from "@/lib/validations/user";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const { name, email, password } = createUserSchema.parse(await req.json());

    // Hash the password for secure storage
    const hashed_password = await hash(password, 12);

    // Create new user in database
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    // Return success response with user data (excluding sensitive information)
    return NextResponse.json({
      status: "success",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error: any) {
    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid input data",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle duplicate email error
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          status: "error",
          message: "An account with this email already exists",
        },
        { status: 409 }
      );
    }

    // Handle unexpected errors
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "An unexpected error occurred during registration",
      },
      { status: 500 }
    );
  }
}
