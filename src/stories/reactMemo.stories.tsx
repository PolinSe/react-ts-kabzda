import React, {useState} from 'react';

export default {
    title: 'React Memo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: string[] }) => {
    console.log('users')
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {

    const [count, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Anna', 'Olga', 'Helen'])

    const onClickHandler = () => setCounter(count + 1)

    const addUser = () => setUsers([...users, 'Sveta'])


    return (
        <>
            <button onClick={onClickHandler}>+</button>
            <button onClick={addUser}>add user</button>

            <Counter count={count}/>
            <Users users={users}/>
        </>
    )
}