'use client';

import { poppins, rubikBuble } from "@/utils/Helper/helper";
import { useEffect } from "react";

function ErrorPage({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])
  return (
    <section className={`${poppins.className} bg-gradient-to-r from-red-400 to-pink-200 flex flex-col items-center h-screen justify-center gap-4`}>
              <h1 className={`${rubikBuble.className} capitalize text-3xl max-[400px]:text-2xl`}>Something Went Wrong!</h1>
              <p className={` text-sm w-[700px] text-center max-[750px]:w-[500px] max-[550px]:w-[400px] max-[550px]:text-[13px] max-[430px]:w-[300px] max-[350px]:w-[250px] max-[290px]:w-[220px]`}>We apologize for that issue, Please Try again so then the issue will resolve . After that, if you hvae any problem so you can contact with our team</p>
            <button className="bg-sky-300 text-white py-2 px-5 rounded-md hover:text-teal-200" onClick={reset}>Try Again</button>
          </section>
  )
}

export default ErrorPage
