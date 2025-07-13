const products = [
  {
    title: 'Wireless Headphones',
    description: 'High quality sound and noise cancellation.',
  },
  {
    title: 'Smart Watch',
    description: 'Track your fitness and get notifications on the go.',
  },
  {
    title: 'Laptop Backpack',
    description: 'Durable and stylish backpack with laptop compartment.',
  },
  {
    title: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass and long battery life.',
  },
  {
    title: 'Phone Holder',
    description: 'Flexible and adjustable stand for your phone.',
  },
  {
    title: 'Gaming Mouse',
    description: 'High precision sensor and ergonomic design for gamers.',
  },
  {
    title: 'LED Monitor',
    description: 'Full HD screen with vibrant colors and wide viewing angles.',
  },
  {
    title: 'Mechanical Keyboard',
    description: 'Clicky keys, RGB lighting, and fast response for typing.',
  },
  {
    title: 'External Hard Drive',
    description: '1TB USB 3.0 drive for fast backups and storage.',
  },
  {
    title: 'USB-C Hub',
    description: 'Expand your laptop ports with HDMI, USB, and card reader.',
  }
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function displayProducts(filteredItems) {
  productList.innerHTML = '';
  
  if (filteredItems.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  filteredItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    productList.appendChild(div);
  });
}

displayProducts(products);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  const filtered = products.filter(product => {
    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  displayProducts(filtered);
});
