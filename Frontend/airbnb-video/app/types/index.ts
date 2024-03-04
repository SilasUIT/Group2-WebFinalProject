import { User } from "@prisma/client";
import { create } from 'zustand';

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string; 
    updatedAt: string;
    emailVerified: string | null;
};