import { useState, useEffect } from "react";
import {data} from '../../../data';

// console.log(data)

const UserChallenge = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) return;
        
        // users.push(name);
        let id = users[users.length-1].id + 1;
        // console.log('id - ' + id)
        setUsers([...users, {id: id, name: name}]);
    }

    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {
        users.map((user) => {
            return <p key={user.id}>
                {user.id}
                {user.name}
                <button onClick={() => removeUser(user.id)} className="btn">Remove User</button>
            </p>
        })
      }
    </div>
  );
};
export default UserChallenge;
