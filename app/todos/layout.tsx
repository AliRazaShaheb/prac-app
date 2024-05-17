import React from "react";

export default function TodosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-16 flex flex-col gap-4">
      <div className=" flex justify-center items-center">TodosLayout</div>
      <div className="">{children}</div>
    </div>
  );
}
