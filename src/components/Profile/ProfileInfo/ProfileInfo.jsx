import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/27625/ee3b7ee2-c06f-4c8e-8a6f-f940eb944c3d/s800' alt="F" />
      </div>
      <div className={s.descriptionBlock}>
        ava + disc
      </div>
    </div>
  )
}

export default ProfileInfo;