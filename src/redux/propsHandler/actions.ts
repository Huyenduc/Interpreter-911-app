import { createAction } from "@reduxjs/toolkit";
import type { PropsPayload } from "./types";
export const propsEnableAudio = createAction<boolean>('PROPS_ENABLE_AUDIO');
export const propsEnableVideo = createAction<boolean>('PROPS_ENABLE_VIDEO');
export const propsSetPerson = createAction<Map<any, any>>('PROPS_SET_PARTICIPANTS');
export const propsSetTrack = createAction<Map<any, any>>('PROPS_SET_VIDEO_TRACK');
export const propsSetStatus = createAction<string>('PROPS_SET_STATUS');
export const propsSetUsername = createAction<string>('PROPS_SET_USERNAME');
export const propsSetRoomname = createAction<string>('PROPS_SET_ROOMNAME');
export const propsSetToken = createAction<string>('PROPS_SET_TOKEN');
export const propsHandlerSet = createAction<PropsPayload>('PROPS_HANDLER_SET');
export const propsHandlerReset = createAction<PropsPayload>('PROPS_HANDLER_REsSET');