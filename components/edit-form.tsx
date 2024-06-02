'use client'
import { updateContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import type { Contact } from "@prisma/client";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";



const UpdateForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithId = updateContact.bind(null, contact.Id);
  const [state, formAction] = useFormState(UpdateContactWithId, null);

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-lg">
        <div className="mb-10 flex items-center">
          <Link href="/contacts" className="flex items-center text-blue-500 hover:underline">
            
              <HiChevronLeft className="w-4 h-4 mr-1" /> Back to Contacts
            
          </Link>
        </div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className={`input ${state?.Error?.Name ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-sm`}
            placeholder="Full Name..."
            defaultValue={contact.Name}
          />
          {state?.Error?.Name && (
            <p className="mt-2 text-sm text-red-500">{state?.Error?.Name}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="Phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="Phone"
            id="Phone"
            className={`input ${state?.Error?.Phone ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-sm`}
            placeholder="Phone Number..."
            defaultValue={contact.Phone}
          />
          {state?.Error?.Phone && (
            <p className="mt-2 text-sm text-red-500">{state?.Error?.Phone}</p>
          )}
        </div>
        {state?.message && (
          <div className="mb-5">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        )}
        <SubmitButton label="Update" />
      </form>
    </div>
  );
};

export default UpdateForm;