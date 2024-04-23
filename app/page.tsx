import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import { promises as fs } from 'fs';

export default async function Home(): Promise<JSX.Element> {
  const file = await fs.readFile(process.cwd() + '/utils/data.json', 'utf8');
  const data = JSON.parse(file);

  return (<div>
    <Header />
    <Main data={data} />
  </div>);
}
