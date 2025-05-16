import { createClient } from "@/lib/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";


const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileSize: '32MB' },
  })
  .middleware(async ({ }) => {
    // Create Supabase client with cookies from the incoming request
    const supabase = await createClient();

    // Get the current logged-in user
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      throw new UploadThingError('Unauthorized');
    }

    // Return the user ID as metadata
    return { userId: user.id };
  })
  .onUploadComplete(async ({ metadata, file }) => {
    console.log("Upload completed for userID ", metadata.userId);
    console.log("File URL", file.url);

    return { userId: metadata.userId, fileUrl: file.url };
  }),
} satisfies FileRouter;

export type ourFileRouter = typeof ourFileRouter;
