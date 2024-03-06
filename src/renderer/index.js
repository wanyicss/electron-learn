import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './app';
import 'antd/dist/antd.min.css'; // 引入样式

createRoot(document.getElementById('app')).render(<App />)
