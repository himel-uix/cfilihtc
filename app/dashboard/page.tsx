'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Order {
  _id: string;
  name: string;
  phone: string;
  address: string;
  quantity: number;
  status: string;
  total: number;
  createdAt: string;
}

export default function DashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    confirmed: 0,
    pending: 0,
  });
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders?limit=5');
      const data = await response.json();

      setOrders(data.orders);

      // Calculate stats
      const total = data.pagination.total;
      const confirmed = data.orders.filter(
        (o: Order) => o.status === 'Confirmed'
      ).length;
      const pending = data.orders.filter(
        (o: Order) => o.status === 'Pending'
      ).length;

      setStats({ total, confirmed, pending });
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmOrder = async (orderId: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Confirmed' }),
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Purchase', {
            value: orders.find((o) => o._id === orderId)?.total,
            currency: 'BDT',
            content_name: "Men's 40+ Multivitamin",
          });
        }

        fetchOrders();
      }
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Cancelled' }),
      });

      if (response.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back, Admin</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-border bg-card/50 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">TOTAL ORDERS</p>
              <p className="text-3xl font-bold text-foreground">{stats.total}</p>
              <p className="text-xs text-green-500 mt-2">↑ Latest this week</p>
            </div>
            <div className="text-4xl">📦</div>
          </div>
        </Card>

        <Card className="border-border bg-card/50 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">CONFIRMED</p>
              <p className="text-3xl font-bold text-foreground">{stats.confirmed}</p>
              <p className="text-xs text-green-500 mt-2">✓ {Math.round((stats.confirmed / (stats.total || 1)) * 100)}% rate</p>
            </div>
            <div className="text-4xl">✓</div>
          </div>
        </Card>

        <Card className="border-border bg-card/50 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">PENDING CALL</p>
              <p className="text-3xl font-bold text-foreground">{stats.pending}</p>
              <p className="text-xs text-red-500 mt-2">⚠ Need attention</p>
            </div>
            <div className="text-4xl">☎️</div>
          </div>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="border-border bg-card/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading...</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No orders yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    ORDER ID
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    CUSTOMERS
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    ADDRESS
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    QTY
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    STATUS
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b border-border hover:bg-card/50">
                    <td className="py-4 px-4 font-mono text-primary">
                      {order._id.slice(0, 8)}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-foreground">{order.name}</p>
                        <p className="text-xs text-muted-foreground">{order.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      {order.address}
                    </td>
                    <td className="py-4 px-4 text-foreground">{order.quantity}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          order.status === 'Confirmed'
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-blue-500/20 text-blue-500'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        {order.status === 'Pending' && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white text-xs px-2"
                              onClick={() => handleConfirmOrder(order._id)}
                            >
                              Confirm
                            </Button>
                            <Button
                              size="sm"
                              className="bg-red-600 hover:bg-red-700 text-white text-xs px-2"
                              onClick={() => handleCancelOrder(order._id)}
                            >
                              Cancel
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-2"
                          onClick={() => handleCall(order.phone)}
                        >
                          Call
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
