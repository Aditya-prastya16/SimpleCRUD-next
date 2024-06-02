import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <h1 className="title text-4xl font-bold mb-4 text-blue-600">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mb-8">
        Just Slap A Button In Bellow -_-&quot;
      </p>
      <Link href="/contacts" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
         
          Go to Contacts
     
      </Link>
      <div className="absolute bottom-4 text-gray-600">
        <Link href="https://www.instagram.com/aditya.prastyaa/" target="_blank" className="text-gray-600 hover:text-gray-800 transition duration-300">
          
            Copyright by |
            <span className="text-blue-500"> Aditya.prastyaa</span> 
          
        </Link>
      </div>
    </div>
  );
}
