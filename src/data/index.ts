import { ServiceRecord } from '../types/service';
import { nidCorrectionService } from './services/nidCorrection';
import { passportRenewalService } from './services/passportRenewal';
import { landMutationService } from './services/landMutation';
import { brtaDrivingLicenseService } from './services/brtaDrivingLicense';
import { birthRegistrationService } from './services/birthRegistration';
import { policeClearanceService } from './services/policeClearance';
import { tradeLicenseService } from './services/tradeLicense';
import { etinTaxReturnService } from './services/etinTaxReturn';
import { deathRegistrationService } from './services/deathRegistration';
import { kaziMarriageRegistrationService } from './services/kaziMarriageRegistration';
import { newVoterRegistrationService } from './services/newVoterRegistration';
import { nationalSavingsCertificatesService } from './services/nationalSavingsCertificates';
import { subornoNagorikDisabilityCardService } from './services/subornoNagorikDisabilityCard';
import { aChallanTreasuryPaymentService } from './services/aChallanTreasuryPayment';
import { citizenshipCharacterCertificateService } from './services/citizenshipCharacterCertificate';
import { vehicleFitnessRenewalService } from './services/vehicleFitnessRenewal';
import { freelancerIdCardService } from './services/freelancerIdCard';
import { noVisaRequiredNvrService } from './services/noVisaRequiredNvr';
import { duplicateAcademicCertificateService } from './services/duplicateAcademicCertificate';
import { nationalUniversityCertificateService } from './services/nationalUniversityCertificate';
import { landMutationAppealMissCaseService } from './services/landMutationAppealMissCase';
import { landAcquisitionCompensationService } from './services/landAcquisitionCompensation';
import { courtAffidavitNotaryPublicService } from './services/courtAffidavitNotaryPublic';
import { etinCancellationDeregistrationService } from './services/etinCancellationDeregistration';
import { pmReliefFundMedicalGrantService } from './services/pmReliefFundMedicalGrant';
import { oneStopCrisisCenterOccService } from './services/oneStopCrisisCenterOcc';

export const VERIFIED_SERVICES: ServiceRecord[] = [
  nidCorrectionService,
  passportRenewalService,
  landMutationService,
  brtaDrivingLicenseService,
  birthRegistrationService,
  policeClearanceService,
  tradeLicenseService,
  etinTaxReturnService,
  deathRegistrationService,
  kaziMarriageRegistrationService,
  newVoterRegistrationService,
  nationalSavingsCertificatesService,
  subornoNagorikDisabilityCardService,
  aChallanTreasuryPaymentService,
  citizenshipCharacterCertificateService,
  vehicleFitnessRenewalService,
  freelancerIdCardService,
  noVisaRequiredNvrService,
  duplicateAcademicCertificateService,
  nationalUniversityCertificateService,
  landMutationAppealMissCaseService,
  landAcquisitionCompensationService,
  courtAffidavitNotaryPublicService,
  etinCancellationDeregistrationService,
  pmReliefFundMedicalGrantService,
  oneStopCrisisCenterOccService
];

export const SERVICE_REGISTRY = new Map<string, ServiceRecord>(
  VERIFIED_SERVICES.map(service => [service.id, service])
);
