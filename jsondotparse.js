const user = {
    name: 'John',
    email: 'john@awesome.com',
    plan: 'Pro'
  };
  
  const userStr = JSON.stringify(user);
  
  JSON.parse(userStr, (key, value) => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  });

  console.log(user);
  