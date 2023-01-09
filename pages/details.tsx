import Card from "../components/card";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const name = router.query.name as string;
  const purchases = Number(router.query.purchases as string);
  return (
    <div className="m-auto">
      <p className="text-xl mb-4 self-start font-semibold">WIDGET: {name}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Card name={name} purchases={purchases} />
        <div className="flex flex-col sm:flex-row ">
          <p className="text-lg font-semibold">Purchases Count:</p>
          <p className="text-lg ml-1">{purchases}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
