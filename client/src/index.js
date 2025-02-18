import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'; // CSSファイルのインポート
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// サービスワーカーの登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
