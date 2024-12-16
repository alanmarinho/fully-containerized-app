import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import config from '@/config';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.API_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`${config.API_URL}/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchUsers();
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div>
        <button className="p-3 bg-green-400" onClick={() => navigate('/create')}>
          novo
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {!!users &&
            users.map((user) => (
              <li key={user.id} className="flex justify-between items-center">
                <div>
                  <p>{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>
                <div>
                  <Link to={`/update/${user.id}`} className="bg-blue-500 text-white p-1 mr-2">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white p-1">
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
