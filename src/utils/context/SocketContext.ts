import { createContext } from 'react';
import { io } from 'socket.io-client';
import {SOCKET_URL} from '@env'

export const socket = io(SOCKET_URL, { transports: ['websocket'], withCredentials: true });
export const SocketContext = createContext(socket);