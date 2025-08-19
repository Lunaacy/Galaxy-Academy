'use client';

import { useParams } from 'next/navigation';
import Test from '@/src/components/profile/test/Test';

export default function TestPage() {
  const params = useParams();
  const testId = Number(params.id); 

  return <Test activeTest={testId} />;
}
