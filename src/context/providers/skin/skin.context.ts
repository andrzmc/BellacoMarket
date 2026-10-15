import { SkinState } from '@/models/interfaces/context/providers/skin';
import { createContext } from 'react';

export const SkinContext = createContext<SkinState>({} as SkinState);
