import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

export const primaryTransitionSpec: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 500,
  },
};

const rootConfig = {
  primaryTransitionSpec,
};

export default rootConfig;
