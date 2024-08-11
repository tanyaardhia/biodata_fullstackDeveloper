export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="PT Edi Indonesia"
          className="h-32 w-32 mb-4"
        />
        <h1 className="text-3xl font-bold text-center">
          Welcome to PT Edi Indonesia
        </h1>
      </div>
      <div className="mt-10 flex flex-row justify-center items-center space-x-8">
        <button className="px-6 py-3 bg-[#134B70] hover:bg-[#508C9B] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
          <a href="/register-user">Candidate</a>
        </button>
        <div className="w-0.5 h-16 bg-gray-300"></div>
        <button className="px-6 py-3 bg-[#508C9B] hover:bg-[#134B70] text-white font-semibold rounded-lg shadow-md transition-all duration-300">
          <a href="/register-user">Admin</a>
        </button>
      </div>
    </div>
  );
}
