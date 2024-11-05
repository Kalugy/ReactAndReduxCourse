function Languages({ language, onLanguageChange }) {
  return (
    <div className="p-4">
      <label className="block text-lg font-semibold mb-2">Select Language</label>
      <div className="flex flex-wrap gap-2">
        {LANGUAGES.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`cursor-pointer py-2 px-4 rounded-lg text-center transition-all duration-300 ${
                language === value
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-200"
              }`}
              onClick={() => onLanguageChange(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];


export default Languages