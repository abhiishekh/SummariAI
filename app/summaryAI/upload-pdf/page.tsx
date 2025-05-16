"use client";

import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthings";
import { toast } from "sonner";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/actions/upload-actions";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// import { formatFileNameAsTitle } from "@/utils/format-utils";
import UploadPdfFrom from "@/app/components/custome/uploadForm";
import { supabase } from "@/lib/client";

// zod schema
const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 24 * 1024 * 1024, {
      message: "File size must be less than 24MB",
    })
    .refine((file) => file.type.startsWith("application/pdf"), {
      message: "File must be a pdf",
    }),
});

export default function UploadPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userID, setUserID] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      // alert("uploaded successfully");
    },
    onUploadError: () => {
      toast("Error occurred while uploading: don't know what the error is");
    },
    onUploadBegin: () => {
      console.log("Upload begun for ");
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const userId = JSON.stringify(data?.user?.id, null, 2);
      console.log("User data", userId);
      setUserID(data?.user?.id || null);
    };
    fetchUser();
  }, []);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // Now validate the file
    const validatedFile = schema.safeParse({ file });

    if (!validatedFile.success) {
      toast("Validation failed");
      setIsLoading(false);
      return;
    }

    toast("PDF is being uploaded! Hang tight, our AI is analyzing your PDF...");

    // Upload the PDF to UploadThing
    const resp = await startUpload([file]);
    // console.log("Upload response", JSON.stringify(resp, null, 2));

    if (!resp || !resp[0]?.serverData) {
      toast("Something went wrong during upload.");
      setIsLoading(false);
      return;
    }

    toast("PDF is being processed! Hang tight...");

    // Extract necessary data
    const { fileUrl, userId } = resp[0].serverData;

    // Format the response for generatePdfSummary
  const uploadResponse = [
  {
    name: resp[0].name,
    serverData: {
      userId,
      fileUrl,
    },
  },
] as [
  {
    name: string;
    serverData: {
      userId: string;
      fileUrl: string;
    };
  }
];

    console.log("Upload response formatted", JSON.stringify(uploadResponse, null, 2));


    // Parse the PDF and generate a summary
    toast("Parsing the PDF! Hang tight...");
    const result = await generatePdfSummary(uploadResponse);
    const { data = null } = result || {};

    if (data) {
      toast("PDF Summary Generated");

      let storeResult: { success: boolean; data?: { id: string } } | null = null;

      if (data.summary) {
        toast("Saving the PDF summary...");

        storeResult = await storePdfSummaryAction({
          userId: userID as string,
          summary_text: data.summary,
          original_file_url: fileUrl,
          title: data.title || "Untitled",
          file_name: file.name,
        });

        if (storeResult?.success) {
          toast("Summary Saved!");
          setIsLoading(false);
        } else {
          toast("Failed to save summary.");
        }
      } else {
        toast("No summary generated.");
      }

      if (storeResult?.data?.id) {
        router.push(`/summaries/${storeResult.data.id}`);
      } else {
        console.log("No storeResult id", storeResult); // Debugging
      }
    }
  } catch (error) {
    console.error("Error occurred", error);
    toast("An error occurred during the upload or processing.");
    formRef.current?.reset();
  } finally {
    setIsLoading(false);
  }
};


  return (
   <div className="min-h-screen flex items-center justify-center px-4">
  <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center py-12">
    <h1 className="text-4xl md:text-5xl mb-6 font-extrabold text-black dark:text-white">
      Upload Your PDF and Discover its{" "}
      <span className="border border-blue-500 rounded-full px-4 capitalize bg-blue-200 hover:rotate-3 transform transition-all duration-300 py-2 inline-block">
        Insights
      </span>
    </h1>

    <p className="text-lg md:text-xl text-black/80 dark:text-white/80 mb-8 max-w-2xl">
      Tired of reading long and complex documents? Just upload your PDF and we&apos;ll generate a quick and clear{" "}
      <span className="font-semibold text-blue-800 dark:text-blue-300">summary reel</span> — a concise overview
      that&apos;s easy to read and understand. Perfect for grasping the core message of the document in seconds.
    </p>

    <div className="w-full">
      <UploadPdfFrom
        ref={formRef}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </div>
  </div>
</div>

  );
}
