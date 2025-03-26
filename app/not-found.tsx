"use client";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex-center flex-col  min-h-screen">
      <div className=" p-6 rounded-lg shadow-md text-center w-1/3">
        <div className="flex-center mb-4">
          <Image
            src="/images/logo.svg"
            width={48}
            height={48}
            alt={`${APP_NAME} logo`}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive mb-4">
          The page you are looking for does not exist.
        </p>
        <Button
          variant="outline"
          className="ml-2"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
