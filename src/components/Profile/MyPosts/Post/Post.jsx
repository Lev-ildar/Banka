import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-pdb/1871571/518a9efc-e77c-461f-8a05-afd8b7c9d7c7/s800' />
      {props.message}
      <div>
        <span>{props.likesCount} Like</span>
      </div>
    </div>

  )
}

export default Post;