import { rubikBuble } from '@/utils/Helper/helper';
import React from 'react'

function Logo() {
  return (
    <div className={`${rubikBuble.className} max-[800px]:absolute left-5 top-4`}>
      <h1 className='text-2xl'>Fabric Haven</h1>
    </div>
  );
}
export default Logo;