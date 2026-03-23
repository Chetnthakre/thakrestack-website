import React, { useEffect, useState } from "react";
import { fetchAnalytics } from "../api";

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchAnalytics();
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };
    load();
  }, []);

  return (
    <div className="section__container">
      <h1 className="section__header">Admin Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>{data.totalRevenue || 0}</h3>
          <p style={{ fontWeight: 600 }}>Total Reach / Value</p>
        </div>
        <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '10px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem' }}>{data.totalOrders || 0}</h3>
          <p style={{ fontWeight: 600 }}>Active Clients / Projects</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;