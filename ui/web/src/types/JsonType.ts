type JsonPrimitive = boolean | Date | null | number | string
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type JsonObject = { [key in string]?: JsonType }
export type JsonType = JsonObject | JsonPrimitive | JsonType[]
