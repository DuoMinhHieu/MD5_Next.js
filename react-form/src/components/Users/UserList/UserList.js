import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserSearch from "../UserSearch/UserSearch";
import Star from "./Star/Star";

function UserList() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Luan",
            email: "luan.com",
            dob: "2000-01-01",
            rate: 4
        },
        {
            id: 2,
            name: "Quan",
            email: "quan.com",
            dob: "2000-01-01",
            rate: 3
        },
        {
            id: 3,
            name: "Teo",
            email: "teo.com",
            dob: "2000-01-01",
            rate: 2.5
        },
        {
            id: 4,
            name: "linh",
            email: "linh.com",
            dob: "2000-01-01",
            rate: 2.5
        }
    ]);

    const [listUsersFilter, setListUsersFilter] = useState(users);

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete")) {
            const newUsers = [...users];
            newUsers.splice(index, 1);
            setUsers(newUsers);
            setListUsersFilter(newUsers);
        }
    }

    const changeStart = (indexUser, newStar) => {
        users[indexUser].rate = newStar + 1;
        setUsers([...users]);
        setListUsersFilter([...users]);
    }

    const handleSearch = (keyword) => {
        const usersF = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));
        setListUsersFilter(usersF);
    }

    const handleSortByStars = () => {
        const sortedUsers = [...listUsersFilter].sort((a, b) => a.rate - b.rate);
        setListUsersFilter(sortedUsers);
    }

    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    <div className="row">
                        <div className="col"> User List
                            <Link to={`/users/create`}>
                                <button className="btn btn-primary ml-2">Add User</button>
                            </Link>
                            <button onClick={handleSortByStars} className="btn btn-secondary ml-2">Sort by Stars</button>
                        </div>
                        <div className="col">
                            <UserSearch search={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Dob</th>
                                <th scope="col">Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsersFilter.map((user, index) => (
                                <tr key={"tr" + index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob}</td>
                                    <td>
                                        <Star name="Luan" indexUser={index} totalStar={user.rate} ratingStar={changeStart} />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                                        <Link to={`/users/${user.id}/edit`}>
                                            <button className="btn btn-primary ml-2">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList;
