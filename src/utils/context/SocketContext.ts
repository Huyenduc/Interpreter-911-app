import { createContext } from 'react';
import { io } from 'socket.io-client';
import env from '@env'

export const socket = io('http://10.10.21.74:3001', { transports: ['websocket'], withCredentials: true });
export const SocketContext = createContext(socket);