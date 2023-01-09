import Link from "next/link";

type CardProps = {
  name: string;
  purchases: number;
};

const Card = ({ name, purchases }: CardProps) => {
  return (
    <Link
      href={{
        pathname: "/details",
        query: { name: name, purchases: purchases },
      }}
      className="w-full"
    >
      <div className="flex flex-row justify-center items-center bg-gray-100 text-black rounded-lg w-[75vw] h-[75vw] sm:w-[25vw] sm:h-[25vw] hover:bg-white hover:text-green-500 hover:border-gray-100 hover:border transition duration-300">
        {name}
      </div>
    </Link>
  );
};

export default Card;
