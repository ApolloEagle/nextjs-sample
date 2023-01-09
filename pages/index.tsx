import Card from "../components/card";
import { getWidgetData } from "../lib/widgets";

const Widgets = ({ data }: { data: Widget[] }) => {
  return (
    <div className="m-auto">
      <p className="text-xl mb-4 self-start">WIDGETS</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5">
        {data.map((widget: Widget, index: number) => {
          return (
            <Card key={index} name={widget.name} purchases={widget.purchases} />
          );
        })}
      </div>
    </div>
  );
};

// Since purchases will most likely be updated SSR was chosen to keep widget info up to date
export const getServerSideProps = async () => {
  const data = await getWidgetData();
  return {
    props: {
      data,
    },
  };
};

export default Widgets;
