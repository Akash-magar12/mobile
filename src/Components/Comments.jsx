import { IoMdStar } from "react-icons/io";
const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "Shivam Thapa",
      days: "2 Days ago",
      text: "Ive been using this backpack for a few weeks now and been a great addition to my daily routine. The leather is high-quality and the design is both stylish and practical. Highly recommend!",
    },
    {
      id: 2,
      name: "John Doe",
      days: "1 Week ago",
      text: "This backpack is perfect for daily use. It's spacious, comfortable, and looks great. The material is durable and easy to clean.",
    },
    {
      id: 3,
      name: "Jane Smith",
      days: "3 Weeks ago",
      text: "I bought this backpack for my son and he loves it. It's perfect for school and has plenty of room for his books and other essentials.",
    },
  ];
  return (
    <div className="my-4 md:my-10">
      <h1 className="text-2xl font-bold">Comments</h1>
      <div className="flex flex-col gap-3">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3 mt-5 ">
            <span className="bg-[#1F2528] aspect-square h-10 w-10 flex justify-center items-center rounded-full text-white text-lg font-medium">
              A
            </span>
            <div>
              <h3 className="text-white font-semibold">
                {c.name}
                <span className="text-gray-400 font-normal text-sm ml-1">
                  {c.days}
                </span>
              </h3>
              <div className="flex text-white">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <p className="text-gray-400 mt-2 text-sm md:w-[70%]">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
