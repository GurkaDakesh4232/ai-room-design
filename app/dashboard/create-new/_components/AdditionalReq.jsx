import React from 'react';
import { Textarea } from '@/components/ui/textarea';

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div>
      <div className="grid w-full gap-1.5 mb-10 text-gray-400">
        <label>Add Additional requirements (optional)</label>
        <Textarea 
          placeholder="Type your message here." 
          onChange={(e) => additionalRequirementInput(e.target.value)} 
        />
      </div>
    </div>
  );
}

export default AdditionalReq;
