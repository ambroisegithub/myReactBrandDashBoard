import { FaUsers } from "react-icons/fa";

function Home() {
  return (
    <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-[#2A2C39] justify-center items-center flex flex-col rounded-md pt-5 pr-5 pl-5 pb-5">
        <div className="flex flex-row justify-center align-center items-center gap-3">
          <FaUsers className="font-bold text-white text-[30px]" />
          <h1 className="font-bold text-white text-sm text-[20px]">
            Total Users
          </h1>
        </div>
        <div>
          <h1 className="text-[#a7a5a5] pt-3 pb-3 font-bold text-3xl">50</h1>
        </div>
      </div>
      <div className="bg-[#2A2C39] justify-center items-center flex flex-col rounded-md pt-5 pr-5 pl-5 pb-5">
        <div className="flex flex-row justify-center align-center items-center gap-3">
          <FaUsers className="font-bold text-white text-[30px]" />
          <h1 className="font-bold text-white text-sm text-[20px]">
            Total Users
          </h1>
        </div>
        <div>
          <h1 className="text-[#a7a5a5] pt-3 pb-3 font-bold text-3xl">50</h1>
        </div>
      </div>
      <div className="bg-[#2A2C39] justify-center items-center flex flex-col rounded-md pt-5 pr-5 pl-5 pb-5">
        <div className="flex flex-row justify-center align-center items-center gap-3">
          <FaUsers className="font-bold text-white text-[30px]" />
          <h1 className="font-bold text-white text-sm text-[20px]">
            Total Users
          </h1>
        </div>
        <div>
          <h1 className="text-[#a7a5a5] pt-3 pb-3 font-bold text-3xl">50</h1>
        </div>
      </div>
      <div className="bg-[#2A2C39] justify-center items-center flex flex-col rounded-md pt-5 pr-5 pl-5 pb-5">
        <div className="flex flex-row justify-center align-center items-center gap-3">
          <FaUsers className="font-bold text-white text-[30px]" />
          <h1 className="font-bold text-white text-sm text-[20px]">
            Total Users
          </h1>
        </div>
        <div>
          <h1 className="text-[#a7a5a5] pt-3 pb-3 font-bold text-3xl">50</h1>
        </div>
      </div>
      <div className="col-span-full bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500 bg-[#343A40]">
              <tr>
                <th scope="col" className="px-6 py-4 text-white font-bold">
                  Blog Id
                </th>
                <th scope="col" className="px-6 py-4 text-white">
                  Blog Image
                </th>
                <th scope="col" className="px-6 py-4 text-white">
                  Blog Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <td className=" px-6 py-4">001</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">002</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">003</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">004</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-danger-200 bg-danger-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">005</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-warning-200 bg-warning-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">006</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
              <tr className="border-b border-info-200 bg-info-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium">007</td>
                <td className="whitespace-nowrap px-6 py-4">Image 1</td>
                <td className="whitespace-nowrap px-6 py-4">
                  Image descirption
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
