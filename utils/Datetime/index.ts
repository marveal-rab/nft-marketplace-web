import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-au";

/**
 * Format datetime
 * @param datetime
 * @param format
 * @param locale
 * @returns
 * @example
 * format("2021-01-01", "YYYY-MM-DD") => "2021-01-01"
 * format("2021-01-01", "YYYY-MM-DD HH:mm:ss") => "2021-01-01 00:00:00"
 * format("2021-01-01", "YYYY-MM-DD HH:mm:ss", "zh-cn") => "2021年01月01日 00:00:00"
 * format("2021-01-01", "YYYY-MM-DD HH:mm:ss", "en-au") => "01/01/2021 00:00:00"
 * format("2021-01-01", "YYYY-MM-DD HH:mm:ss", "en") => "01/01/2021 00:00:00"
 */
export const format = (
  datetime: string | number | Date,
  format: string,
  locale?: string
) => {
  if (locale) {
    moment.locale(locale);
  } else {
    moment.locale("en");
  }
  return moment(datetime).format(format);
};

export const fromNow = (datetime: string | number | Date, locale?: string) => {
  if (locale) {
    moment.locale(locale);
  } else {
    moment.locale("en");
  }
  return moment(datetime).fromNow();
};
