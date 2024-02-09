import { ReactNode } from "react";
import { Clock } from "./clock.component";
const imgUrl =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="border-4 rounded-[40px] w-full h-full p-6 flex relative bg-black shadow-2xl shadow-black">
      <img src={imgUrl} className="object-cover w-full rounded-[16px]" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="p-2 w-full h-full">{children}</div>
      </div>
    </div>
  );
}

function AppIcon({
  app: { id, name, icon, onClick },
  displayName,
}: {
  app: {
    id: string;
    name: string;
    icon: string;
    onClick: () => void;
  };
  displayName?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 transition-all hover:scale-105"
    >
      <div className="w-[40px] h-[40px] bg-white rounded-md" />
      {displayName && <span className="text-xs">{name}</span>}
    </button>
  );
}

function Content() {
  const apps = [
    { id: "1", name: "App", icon: "", onClick: () => {} },
    { id: "2", name: "Microwave", icon: "", onClick: () => {} },
    { id: "3", name: "Another app", icon: "", onClick: () => {} },
  ];

  return (
    <div className="flex-1 p-20">
      <div className="grid grid-cols-6 items-center">
        {apps.map((app) => (
          <AppIcon key={app.id} app={app} displayName />
        ))}
      </div>
    </div>
  );
}

function BottomBar() {
  const apps = [
    { id: "1", name: "App", icon: "", onClick: () => {} },
    { id: "2", name: "Microwave", icon: "", onClick: () => {} },
    { id: "3", name: "Another app", icon: "", onClick: () => {} },
  ];
  return (
    <div className="self-center relative bg-opacity-20 rounded-xl backdrop-filter backdrop-blur-sm">
      <div className="px-6 py-2.5 flex shadow-lg">
        <div className="flex gap-3 items-center">
          {apps.map((app) => (
            <AppIcon key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Application() {
  return (
    <div className="px-[300px] py-6 w-full h-full bg-slate-700">
      <img
        src={imgUrl}
        className="absolute inset-0 object-cover w-full h-full blur-md"
      />
      <Layout>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="self-start w-full flex items-center justify-between">
            <Clock />
            <div className="text-xs">100% Battery</div>
          </div>
          <Content />
          <BottomBar />
        </div>
      </Layout>
    </div>
  );
}
