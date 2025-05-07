/**
 * Session Management API Route
 * 
 * Handles session-related requests. Verifies user authentication status
 * and returns current session information.
 * 
 * @route GET /api/session
 * @returns {Promise<NextResponse>} JSON response with session data or error message
 */

import { auth } from "@/lib/auth/config";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  try {
    // Get current session
    const session = await auth();

    // Check if user is authenticated
    if (!session?.user) {
      return NextResponse.json(
        {
          status: "error",
          message: "Authentication required",
          authenticated: false,
        },
        { status: 401 }
      );
    }

    // Return session data
    return NextResponse.json({
      status: "success",
      data: {
        authenticated: true,
        session: {
          user: {
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
          },
          expires: session.expires,
        },
      },
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Session error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to retrieve session information",
        authenticated: false,
      },
      { status: 500 }
    );
  }
}
