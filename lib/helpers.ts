import { Setting } from "./types";

export const exchangeUnit = (setting: Setting): Setting => {
  const n_setting = Object.assign({}, setting);
  return {
    ...n_setting,
    $from: n_setting.$to,
    $to: n_setting.$from,
  };
};
