import React from "react";

export type Item = {
  createdAt: string;
  name: string;
  updatedAt: string;
  description: string;
  id: string;
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
  render?: DataRenderer;
  endpoint: string;
  filter?: string
}
