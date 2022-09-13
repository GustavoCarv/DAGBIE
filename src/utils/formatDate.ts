export const formatDate = (date: Date) => {
  const month = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ]
  const day = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ]
  const createdAt = new Date(String(date))
  const monthCreatedAt = month[createdAt.getMonth()]
  const dayCreatedAt = day[createdAt.getDay()]
  const itemCreatedAt =
    createdAt.getDate() +
    " " +
    monthCreatedAt +
    " " +
    createdAt.getFullYear() +
    ", " +
    dayCreatedAt;
  return itemCreatedAt;
}

