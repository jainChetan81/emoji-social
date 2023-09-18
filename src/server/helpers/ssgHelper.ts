import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "~/server/api/root";
import { db } from "~/server/db";
import superjson from "superjson";

export const generateSSGHelper = () =>
  createProxySSGHelpers({
    router: appRouter,
    // @ts-expect-error - we don't have a user yet
    ctx: { db, userId: null },
    transformer: superjson, // optional - adds superjson serialization
  });
