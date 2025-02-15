import { ReactNode } from 'react';

function PageLayout ({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-950 w-lvw h-lvh p-4">
        <div className='bg-white rounded-lg p-4 max-w-3xl mx-auto'>
            <div className='grid grid-cols-12 gap-4'>
                {children}
            </div>
        </div>
    </div>
  );
};

export default PageLayout;