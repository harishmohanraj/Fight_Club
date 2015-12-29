module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('leaderBoard', JSON.stringify([
      {
        leaders: [
          {
            name: 'Ria',
            designation: 'Senior Associate L1',
            avatar: 'abc.jpg'
          },
          {
            name: 'Sandhya',
            designation: 'Senior Associate L1',
            avatar: 'abc.jpg'
          },
          {
            name: 'Harish',
            designation: 'Senior Associate L1',
            avatar: 'abc.jpg'
          },
          {
            name: 'Harish1',
            designation: 'Senior Associate L1',
            avatar: 'abc.jpg'
          },
          {
            name: 'Harish2',
            designation: 'Senior Associate L1',
            avatar: 'abc.jpg'
          }
        ]
      }
    ]));
  }

};