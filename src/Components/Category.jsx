
const Category = () => {
  const arr = [
    { name: "phone", key: 1 },
    { name: "phone case", key: 2 },
    { name: "watch", key: 3 },
    { name: "accessories", key: 4 },
    { name: "Apple", key: 5 },
    { name: "Samsung", key: 6 },
    { name: "Nothing", key: 7 },
    { name: "Xiomi", key: 8 },
    { name: "Fossil", key: 9 },
    { name: "Others", key: 10 },
  ];

  return (
    <div className="flex mt-4  items-center scroller gap-4 overflow-x-auto">
      {arr.map((but) => (
        <button
          key={but.key}
          className="bg-[#242424] capitalize flex-shrink-0 text-sm px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-[#3B3B3B] hover:text-[#AAAAAA] transition duration-200 ease-in-out"
        >
          {but.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
