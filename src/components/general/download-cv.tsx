'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Adeboye_qudus_omolaja.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
