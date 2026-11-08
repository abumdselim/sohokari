import { ServiceRecord } from '../types/service';
import { nidCorrectionService } from './services/nidCorrection';
import { passportRenewalService } from './services/passportRenewal';
import { landMutationService } from './services/landMutation';

export const VERIFIED_SERVICES: ServiceRecord[] = [
  nidCorrectionService,
  passportRenewalService,
  landMutationService
];

export const SERVICE_REGISTRY = new Map<string, ServiceRecord>(
  VERIFIED_SERVICES.map(service => [service.id, service])
);
