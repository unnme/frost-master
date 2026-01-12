export const Loading = ({ name }) => {
  if (name) {
    console.log("Loading", name);
  }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-main-orange border-r-transparent border-b-transparent border-l-transparent" />
      </div>

      <p className="mt-4 text-sm text-gray-600">Загрузка...</p>
    </div>
  );
};
