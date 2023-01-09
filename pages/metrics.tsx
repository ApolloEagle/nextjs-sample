import { getWidgetData } from "../lib/widgets";
import PurchaseByWidget from "../components/purchase-by-widget";
import PurchaseGoal from "../components/purchase-goal";
import WidgetDistribution from "../components/widget-distribution";

const Metrics = ({ data }: { data: Widget[] }) => {
  return (
    <div className="m-auto">
      <p className="text-xl mb-4 self-start">METRICS</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 sm:gap-10">
        <PurchaseByWidget data={data} />
        <PurchaseGoal data={data} />
        <WidgetDistribution data={data} />
      </div>
    </div>
  );
};

// Since purchases will most likely be updated SSR was chosen to keep metrics up to date
export const getServerSideProps = async () => {
  const data = await getWidgetData();
  return {
    props: {
      data,
    },
  };
};

export default Metrics;
