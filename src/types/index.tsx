import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler;
  btnType?: "button" | "submit";
  disabled?: boolean;
  rIcon?: string;
};
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};

export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};
