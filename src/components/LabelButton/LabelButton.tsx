'use client';
import { useEcomHook } from '@/Context/Context'
import { poppins } from '@/utils/Helper/helper';


function LabelButton() {
    const {onCreatingLabel,loading} = useEcomHook();
  return (
    <button className={`${poppins.className} bg-teal-400 text-white p-3 rounded-md`} onClick={onCreatingLabel} disabled={loading}>{loading ? 'Creating Label...' :'Create Label'}</button>
  )
}

export default LabelButton
