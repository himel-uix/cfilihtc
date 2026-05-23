'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Order {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
  status: string;
  total: number;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchOrders();
  }, [page]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/orders?page=${page}&limit=10`);
      const data = await response.json();
      setOrders(data.orders);
      setTotalPages(data.pagination.pages);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('Are you sure you want to delete this order?')) return;

    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Order deleted successfully');
        fetchOrders();
      } else {
        toast.error('Failed to delete order');
      }
    } catch (error) {
      toast.error('Failed to delete order');
      console.error('Error deleting order:', error);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(search.toLowerCase()) ||
    order.email.toLowerCase().includes(search.toLowerCase()) ||
    order.phone.includes(search)
  );

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground mt-2">Manage and track all orders</p>
      </div>

      {/* Search */}
      <Card className="border-border bg-card/50 p-6">
        <Input
          type="search"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </Card>

      {/* Orders Table */}
      <Card className="border-border bg-card/50 overflow-hidden">
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            {search ? 'No orders match your search' : 'No orders found'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-card/80 border-b border-border">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    ORDER ID
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    CUSTOMER
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    EMAIL
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    PHONE
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    ADDRESS
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    QTY
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    TOTAL
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    STATUS
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    DATE
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-border/50 hover:bg-card/80 transition-colors"
                  >
                    <td className="py-4 px-6 font-mono text-primary text-sm">
                      {order._id.slice(0, 8)}...
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium">
                      {order.name}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{order.email}</td>
                    <td className="py-4 px-6 text-muted-foreground">{order.phone}</td>
                    <td className="py-4 px-6 text-muted-foreground text-sm">
                      {order.address}
                    </td>
                    <td className="py-4 px-6 text-foreground">{order.quantity}</td>
                    <td className="py-4 px-6 font-semibold text-primary">
                      ৳ {order.total}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Confirmed'
                            ? 'bg-green-500/20 text-green-500'
                            : order.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground text-sm">
                      {new Date(order.createdAt).toLocaleDateString('en-GB')}
                    </td>
                    <td className="py-4 px-6">
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white px-3 h-8 text-xs"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        🗑 Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between p-6 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              ← Previous
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i + 1}
                  variant={page === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              Next →
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
