import { Exclamation, LocationIcon } from "../svg/Icons";

export function LoactionInfo() {
  return (
    <div className="bg-white dark:bg-gray-800  p-6 sm:p-8 shadow-lg rounded-xl max-w-xl w-full mx-auto">
      <div className="flex flex-col  justify-center items-center">
        <div className="flex items-center justify-center min-w-10 w-10 h-10  bg-blue-500 dark:bg-blue-600 text-white rounded-full">
          <LocationIcon />
        </div>
        <div className="pl-6 pr-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4 text-center">
            Find Friends Nearby
          </h2>
          <p className="text-gray-600 text-sm  dark:text-gray-300 text-center mt-2">
            Allow us to access your location to find friends near you. Connect
            and share moments with people close by.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 w-full p-4 mt-3 rounded-xl">
        <div className="w-full max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Player ID"
              className="block text-center w-full px-4 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition duration-300 ease-in-out"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Exclamation />
            </div>
          </div>
        </div>
        <button className="mt-6 w-full btn btn-primary text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center justify-center py-3 rounded-lg transition duration-300">
          <LocationIcon />
          Share My Location
        </button>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
        We respect your privacy. Your location is secure and will only be used
        to connect you with nearby friends.
      </p>
    </div>
  );
}
