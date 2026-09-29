import type { RequestPayload } from "@/types/request";

/** Заглушка не отправляет и не сохраняет персональные данные. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function submitRequest(_payload: RequestPayload): Promise<{
  status: 'demo'; message: string;
}> {
  return {
    status: 'demo',
    message: 'Это демонстрационная форма. Заявка не отправлена.',
  };
}

