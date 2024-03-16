import { Listing, User } from "@prisma/client";
import { create } from 'zustand';

export type SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string;
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string; 
    updatedAt: string;
    emailVerified: string | null;
};