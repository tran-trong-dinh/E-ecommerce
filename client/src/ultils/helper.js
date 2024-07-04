export const createSlug = (string) => {
  if (string)
    return string
      ?.toLowerCase()
      ?.normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "")
      ?.split(" ")
      ?.join("-");
};
