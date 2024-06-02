import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            Name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            Phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getContactById = async (Id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { Id },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getContactPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            Name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            Phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
};