import React from "react";

export type Item = {
  createdAt: string;
  name: string;
  updatedAt: string;
  description: string;
  type: string;
  id: string;
  variables?: any;
  query?: string;
};

export interface DataRendererProps {
  items: Item[];
}

export type DataRenderer = (props: DataRendererProps) => React.ReactElement;

export interface DataContainerProps {
  render: DataRenderer;
  endpoint?: string;
}
