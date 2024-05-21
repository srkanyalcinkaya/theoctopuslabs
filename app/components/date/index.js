import { parseISO, format } from "date-fns";
import { enUS, tr } from "date-fns/locale";

export default function Date({ dateString, locale }) {
  const date = parseISO(dateString);

  const localeMap = {
    en: enUS,
    tr: tr,
  };

  const selectedLocale = localeMap[locale] || enUS;

  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: selectedLocale })}
    </time>
  );
}
