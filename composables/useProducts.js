export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      name_ar: "سماعات لاسلكية",
      price: 99.99,
      description:
        "High-quality wireless headphones with noise cancellation and long battery life.",
      description_ar:
        "سماعات لاسلكية عالية الجودة مع إلغاء الضوضاء وبطارية طويلة المدى.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      name_ar: "ساعة ذكية",
      price: 199.99,
      description:
        "Feature-rich smartwatch with health monitoring and GPS tracking.",
      description_ar: "ساعة ذكية غنية بالمميزات مع مراقبة الصحة وتتبع GPS.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      name_ar: "حقيبة لابتوب",
      price: 49.99,
      description:
        "Durable laptop backpack with multiple compartments and water resistance.",
      description_ar: "حقيبة لابتوب متينة مع عدة جيوب ومقاومة للماء.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      name_ar: "فأرة لاسلكية",
      price: 29.99,
      description:
        "Ergonomic wireless mouse with precision tracking and long battery life.",
      description_ar: "فأرة لاسلكية مريحة مع تتبع دقيق وبطارية طويلة المدى.",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      name_ar: "مكبر صوت بلوتوث",
      price: 79.99,
      description:
        "Portable Bluetooth speaker with powerful sound and waterproof design.",
      description_ar: "مكبر صوت بلوتوث محمول بصوت قوي وتصميم مقاوم للماء.",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "USB-C Cable",
      name_ar: "كابل USB-C",
      price: 19.99,
      description: "Fast charging USB-C cable with data transfer support.",
      description_ar: "كابل USB-C للشحن السريع مع دعم نقل البيانات.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      name_ar: "فأرة ألعاب",
      price: 59.99,
      description: "High-precision gaming mouse with customizable buttons.",
      description_ar: "فأرة ألعاب عالية الدقة مع أزرار قابلة للتخصيص.",
      image:
        "https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Wireless Charger",
      name_ar: "شاحن لاسلكي",
      price: 39.99,
      description: "Fast wireless charger compatible with all Qi devices.",
      description_ar: "شاحن لاسلكي سريع متوافق مع جميع أجهزة Qi.",
      image:
        "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdpcmVsZXNzJTIwQ2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Action Camera",
      name_ar: "كاميرا أكشن",
      price: 149.99,
      description: "Waterproof action camera with 4K recording.",
      description_ar: "كاميرا أكشن مقاومة للماء مع تسجيل 4K.",
      image:
        "https://images.unsplash.com/photo-1690099613427-1a3412175445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFjdGlvbiUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      name: "Fitness Tracker",
      name_ar: "متعقب اللياقة",
      price: 69.99,
      description: "Fitness tracker with heart rate and sleep monitoring.",
      description_ar: "متعقب لياقة مع مراقبة معدل ضربات القلب والنوم.",
      image:
        "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 11,
      name: "Tablet Stand",
      name_ar: "حامل تابلت",
      price: 24.99,
      description: "Adjustable tablet stand for desk and travel.",
      description_ar: "حامل تابلت قابل للتعديل للمكتب والسفر.",
      image:
        "https://plus.unsplash.com/premium_photo-1661765720591-1eef166555dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFibGV0JTIwU3RhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 12,
      name: "Noise Cancelling Earbuds",
      name_ar: "سماعات أذن مانعة للضوضاء",
      price: 89.99,
      description: "Wireless earbuds with active noise cancellation.",
      description_ar: "سماعات أذن لاسلكية مع إلغاء نشط للضوضاء.",
      image:
        "https://images.unsplash.com/photo-1722439667098-f32094e3b1d4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const getProducts = () => products;

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return {
    products,
    getProducts,
    getProductById,
    getProductsByCategory,
  };
};
