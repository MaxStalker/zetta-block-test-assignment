import React from "react";

export type Item = {
  createdAt: string;
  name: string;
  updatedAt: string;
  description: string;
  id: string;
  type: string;
  variables?: any;
  query?: string;
};

export interface DataRendererProps {
  loading: boolean;
  error: string;
  data: Item[];
  sort: () => void;
}

export type DataRenderer = (props: DataRendererProps) => React.ReactElement;

export interface DataContainerProps {
  render?: DataRenderer;
  endpoint: string;
  filter?: string;
}
