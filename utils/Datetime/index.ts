import moment from "moment";

export const format = (datetime: string | number, format: string) => {
  return moment(datetime).format(format);
};
