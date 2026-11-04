import CampaignMachinePage, { campaignMetadata } from '@/components/campaign/CampaignMachinePage';
import { PACTUR_AUTO_60, COLIMATIC_THERA_450 } from '@/data/campaignMachines';

export const metadata = campaignMetadata(COLIMATIC_THERA_450, 'pl');

export default function Page() {
  return <CampaignMachinePage machine={COLIMATIC_THERA_450} other={PACTUR_AUTO_60} lang="pl" />;
}
