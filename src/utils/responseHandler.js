/* Response handler to keep this logic out of controllers */
export const handleResponse = (res, result) => {
  if (!result || typeof result !== "object") {
    return res.status(500).json({ error: "Respuesta inválida del servicio" });
  }

  const { success, status, data, error } = result;

  if (!success) {
    console.error("Error:", error);
    return res.status(status || 500).json({ error });
  }

  return res.status(status || 200).json(data);
};