'use strict';

function anAction() {
  const logo = document.querySelector('.logo');
  const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve('logo clicked!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('rejected after 3 sec'));
    }, 3000);
  });

  promise1
    .then((message) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = 'Promise was resolved!';
      document.querySelector('body').append(div);
    })
    .catch((error) => {});

  promise2
    .then((message) => {})
    .catch((error) => {
      const div = document.createElement('div');

      div.classList.add('message');
      div.classList.add('error-message');

      div.textContent = 'Promise was rejected!';
      document.body.append(div);
      console.log('promise 2 error', error);
    });
}

anAction();
