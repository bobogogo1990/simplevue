function add(x, y) {
  return x + y;
}

const sumArray = (...arr) => {
  const subtype = typeof arr[0] === 'array';
  const items = subtype ? arr[0] : arr;
  return items.reduce((prev, next) => {
    return prev + next;
  }, 0);
}

function fetch(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          type: 'ADD_ITEM',
          userId: '1234567'
        }
      });
    }, 1000);
  });
};

async function getUserInfo() {
  return await fetch('userInfo');
}


module.exports = {
  add,
  sumArray,
  getUserInfo,
};