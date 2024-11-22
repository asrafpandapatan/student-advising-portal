import { IProfile } from 'src/entities';
import { Struct } from 'src/structs';
export type Auth =
  Struct<'loginWithGoogle', {
    success: (profile: IProfile) => void;
    error?: ErrorCallback;
  }>
  | Struct<'logOut', {
    success: VoidCallback;
    error: ErrorCallback;
  }>
