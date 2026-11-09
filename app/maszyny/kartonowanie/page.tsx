import CartoningPage, { cartoningMetadata } from '@/components/cartoning/CartoningPage';

export const metadata = cartoningMetadata('pl');

export default function KartonowaniePage() {
  return <CartoningPage lang="pl" />;
}
