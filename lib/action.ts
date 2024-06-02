'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  Name: z.string().min(6),
  Phone: z.string().min(11),
});

export const SaveContact = async(prevSate: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        Name: validatedFields.data.Name,
        Phone: validatedFields.data.Phone,
      },
    });
  } catch (error) {
    return { message: "Failed to create contact" };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};





export const updateContact = async(Id:string, prevSate: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.update({
      data: {
        Name: validatedFields.data.Name,
        Phone: validatedFields.data.Phone,
      },
      where:{Id}
    });
  } catch (error) {
    return { message: "Failed to update contact" };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};





export const deleteContact = async(Id:string) => {

  try {
    await prisma.contact.delete({

      where:{Id}
    });
  } catch (error) {
    return { message: "Failed to delete contact" };
  }

  revalidatePath("/contacts");

};