const Spinner = () => {
    return (
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <h2 className="text-2xl font-semibold animate-pulse">Loading...</h2>

    </div>
    );
  };
  
  export default Spinner;
  