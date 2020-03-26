import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length ===0) {
        props.setUsers(
            [
                {id: 1, photoUrl:'https://avatars.mds.yandex.net/get-zen_doc/1888335/pub_5d7bc351ba281e00b725e9e8_5d7bf3d4433ecc00ad266c2d/scale_1200',
                    followed: false, fullName: 'Dmitry', status: 'I am a Boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://yt3.ggpht.com/a/AGF-l7_M9gldSCa3VasLcJqwcihWYuvCPnJ-3VbAmw=s900-c-k-c0xffffffff-no-rj-mo',
                    followed: true, fullName: 'Yura', status: 'I am a Boss too', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoUrl: 'https://im0-tub-ru.yandex.net/i?id=dad4fb96db92a2bb761bb4221f132059&n=13',
                    followed: false, fullName: 'Ivan', status: 'I am a Boss too too', location: {city: 'Kiev', country: 'Ukraine'}},
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;