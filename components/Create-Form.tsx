'use client'
import { SaveContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

const CreateForm = () => {
  const [state, formAction] = useFormState(SaveContact, null);

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-lg">
              <div className="mb-5 flex items-center">
          <Link href="/contacts" className="flex items-center text-blue-500 hover:underline">
            
              <HiChevronLeft className="w-4 h-4 mr-1" /> Back to Contacts
            
          </Link>
        </div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="Name"
              id="Name"
              className={`input ${state?.Error?.Name ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-sm`}
              placeholder="Full Name..."
            />
            {state?.Error?.Name && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          {state?.Error?.Name && (
            <p className="mt-2 text-sm text-red-500">{state?.Error?.Name}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="Phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="text"
              name="Phone"
              id="Phone"
              className={`input ${state?.Error?.Phone ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-sm`}
              placeholder="Phone Number..."
            />
            {state?.Error?.Phone && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          {state?.Error?.Phone && (
            <p className="mt-2 text-sm text-red-500">{state?.Error?.Phone}</p>
          )}
        </div>
        {state?.message && (
          <div className="mb-5">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        )}
        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default CreateForm;
