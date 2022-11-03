import React from "react";

export type Item = {
  id: string;
  name: string;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  variables?: any;
  query?: string;
};

export interface DataRendererProps {
  loading: boolean;
  error: string;
  data: Item[];
}

export type DataRenderer = (props: DataRendererProps) => React.ReactElement;

export interface DataContainerProps {
  render: DataRenderer;
  endpoint?: string;
}
