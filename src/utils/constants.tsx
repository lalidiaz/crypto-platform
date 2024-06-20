import { FaCoins } from "react-icons/fa6";
import { BsColumnsGap } from "react-icons/bs";
import { CurrencyOption } from "../types";

export const links = [
  { label: "Coins", href: "/", icon: <FaCoins /> },
  { label: "Categories", href: "/categories", icon: <BsColumnsGap /> },
];

export const currencyOptions: CurrencyOption[] = [
  { label: "USD", value: "usd", format: "en-US" },
  { label: "AED", value: "aed", format: "en-AE" },
  { label: "ARS", value: "ars", format: "es-AR" },
];

export const order = [
  { label: "Market cap asc", value: "market_cap_asc" },
  { label: "Market cap desc", value: "market_cap_desc" },
  { label: "Volume asc", value: "volume_asc" },
  { label: "Volume desc", value: "volume_desc" },
  { label: "ID desc", value: "id_desc" },
];
