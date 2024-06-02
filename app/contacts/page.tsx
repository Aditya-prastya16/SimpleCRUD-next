import ContactTable from "@/components/contact-table";
import Search from "@/components/Search";
import Pagination from "@/components/pagination";
import { CreateButton } from "@/components/buttons";
import { getContactPages } from "@/lib/data";
import { Suspense } from "react";
import { TableSkeleton } from "@/components/skeleton";

const Contacts = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactPages(query);

  return (
    <div className="max-w-screen-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
        <div className="md:w-1/2">
          <Search />
        </div>
        <div className="md:w-1/2 flex justify-end">
          <CreateButton />
        </div>
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
