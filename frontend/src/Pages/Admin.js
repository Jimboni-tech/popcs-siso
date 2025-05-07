import { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [signouts, setSignouts] = useState([]);
  const [signins, setSignins] = useState([]);

  useEffect(() => {
    const fetchSignouts = async () => {
      try {
        const res = await axios.get('http://localhost:3001/signout');
        setSignouts(res.data);
      } catch (err) {
        console.error("Error fetching sign-out data:", err);
      }
    };
    fetchSignouts();
  }, []);

  useEffect(() => {
    const fetchSignins = async () => {
      try {
        const res = await axios.get('http://localhost:3001/signin');
        setSignins(res.data);
      } catch (err) {
        console.error("Error fetching sign-in data:", err);
      }
    };
    fetchSignins();
  }, []);

  return (
    <div id="admin-page">
      <div className="admin-section">
        <h1>Sign-Out Records</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date/Time</th>
              <th>Reason</th>
              <th>Class</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {signouts.map((record) => (
              <tr key={record.idsignout}>
                <td data-label="ID">{record.idsignout}</td>
                <td data-label="Name">{record.name}</td>
                <td data-label="Date/Time">{new Date(record.datetime).toLocaleString()}</td>
                <td data-label="Reason">{record.reason}</td>
                <td data-label="Class">{record.class}</td>
                <td data-label="Teacher">{record.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-section">
        <h1>Sign-In Records</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date/Time</th>
              <th>Reason</th>
              <th>Class</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {signins.map((record) => (
              <tr key={record.idsignin}>
                <td data-label="ID">{record.idsignin}</td>
                <td data-label="Name">{record.name}</td>
                <td data-label="Date/Time">{new Date(record.datetime).toLocaleString()}</td>
                <td data-label="Reason">{record.reason}</td>
                <td data-label="Class">{record.class}</td>
                <td data-label="Teacher">{record.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;