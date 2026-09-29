import type { ServiceId } from "@/data/services";

export type RequestPayload = {
  name: string;
  phone: string;
  comment: string;
  sourcePath: string;
} & (
  | { serviceId: ServiceId; otherService?: never }
  | { serviceId: 'other'; otherService: string }
);

