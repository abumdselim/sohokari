import { ServiceRecord } from '../types/service';
import { nidCorrectionService } from './services/nidCorrection';
import { passportRenewalService } from './services/passportRenewal';
import { landMutationService } from './services/landMutation';
import { brtaDrivingLicenseService } from './services/brtaDrivingLicense';
import { birthRegistrationService } from './services/birthRegistration';
import { policeClearanceService } from './services/policeClearance';
import { tradeLicenseService } from './services/tradeLicense';
import { etinTaxReturnService } from './services/etinTaxReturn';

export const VERIFIED_SERVICES: ServiceRecord[] = [
  nidCorrectionService,
  passportRenewalService,
  landMutationService,
  brtaDrivingLicenseService,
  birthRegistrationService,
  policeClearanceService,
  tradeLicenseService,
  etinTaxReturnService
];

export const SERVICE_REGISTRY = new Map<string, ServiceRecord>(
  VERIFIED_SERVICES.map(service => [service.id, service])
);
