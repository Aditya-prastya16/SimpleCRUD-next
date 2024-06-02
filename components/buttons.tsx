'use client'
import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"
import { useFormStatus } from "react-dom"
import clsx from "clsx"
import { deleteContact } from "@/lib/action"

export const CreateButton = () =>{
    return (
        <Link href="/contacts/create" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
            <IoAddSharp size={20} />
            Create
            </Link>
    )
}


export const EditButton = ({Id}:{Id:string}) =>{
    return (
        <Link href={`/contacts/edit/${Id}`} className="rounded-sm border p-1 hover:bg-grey-100">
            <IoPencil size={20} />

            </Link>
    )
}


export const DeleteButton = ({Id}:{Id:string}) =>{
    const DeleteContactWithId = deleteContact.bind(null,Id)
    return (
        <form action={DeleteContactWithId}>

        <button  className="rounded-sm border p-1 hover:bg-grey-100">
            <IoTrashOutline size={20} />
            </button>
        </form>
    )
}


export const SubmitButton = ({label}:{label:String}) =>{
    const {pending} = useFormStatus()

    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress" : pending
        }
    )

    return (
        <button
          type="submit"
          className={className} 
          disabled={pending}
        >
          {label === "save"?(
            <span>{pending ? "saving..." : "Save"}</span>
            ):(
            <span>{pending? "updating..." : "Update"}</span>
          )}
        </button>
    )
}