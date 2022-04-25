import React from 'react';
import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* // <HolaMundoScreen></HolaMundoScreen>
      // <CounterScreen></CounterScreen> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
export default App;
