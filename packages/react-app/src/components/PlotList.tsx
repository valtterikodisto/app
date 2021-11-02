import React from "react";
import { List } from "antd";

import { Plot } from "../models/Plot";
import PlotButton from "./PlotButton";
import { motion } from "framer-motion";

interface Props {
  plots: Plot[];
  emptyMessage: string;
}

export default function PlotList({ plots, emptyMessage }: Props) {
  return (
    <div className="list">
      {plots.slice(0, 10).map((plot: Plot, idx: number) => (
        <motion.div className="list-item" key={plot.id} layout>
          <PlotButton plot={plot} delay={idx} />
        </motion.div>
      ))}
      {plots.length === 0 && <span className="text-gray-7 third-font">{emptyMessage}</span>}
    </div>
  );
}
