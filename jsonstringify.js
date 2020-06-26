const user = {
    id: 229,
    name: 'John',
    email: 'john@awesome.com'
  };
  
  function replacer(key, value) {
    console.log(typeof value);
    if (key === 'email') {
      return undefined;
    }
    return value;
  }
  
//   const userStr = JSON.stringify(user, replacer);
//   // "{"id":229,"name":"John"}"

//   const user = {
//     name: 'John',
//     email: 'john@awesome.com',
//     plan: 'Pro'
//   };
  
//   const userStr = JSON.stringify(user, null, '...');
//   // "{
//   // ..."name": "John",
//   // ..."email": "john@awesome.com",
//   // ..."plan": "Pro"
//   // }"