import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";

export const formatDate = (date: string | undefined) => {
  const jst = date
    ? new TZDate(date).withTimeZone("Asia/Tokyo")
    : new TZDate().withTimeZone("Asia/Tokyo");

  return format(jst, "yyyy.MM.dd");
};
