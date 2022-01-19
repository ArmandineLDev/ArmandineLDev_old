import React from 'react'
import { socialData } from '../../datas/social';
import SocialItem from './SocialItem';

const SocialBar = () => {
    const data = socialData;
    return (
        <div className="flex space-x-4">
      {data.map((item, index) => {
        return (
          <div className='h-6 w-6' key={index}>
            <SocialItem item={item} />
          </div>
        );
      })}
    </div>
    )
}

export default SocialBar
