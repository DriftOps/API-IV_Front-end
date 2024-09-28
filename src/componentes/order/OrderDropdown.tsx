import React from 'react';

interface OrderDropdownProps {
  orders: { id: string; name: string }[];
  onSelectOrder: (orderId: string) => void;
}

const OrderDropdown: React.FC<OrderDropdownProps> = ({ orders, onSelectOrder }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <select
        onChange={(e) => onSelectOrder(e.target.value)}
        defaultValue=""
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <option value="" disabled>
          Selecione um processo
        </option>
        {orders.map((order) => (
          <option key={order.id} value={order.id}>
            {order.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderDropdown;
