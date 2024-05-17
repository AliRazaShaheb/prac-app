import TodoList from "@/components/todos/list";
import React from "react";

export default async function Todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("data", data);

  return (
    <div>
      <div className="">Todos</div>
      <div>
        <TodoList data={data} />
      </div>
    </div>
  );
}
