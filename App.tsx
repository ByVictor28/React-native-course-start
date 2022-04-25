import React from 'react';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* // <HolaMundoScreen></HolaMundoScreen>
      // <CounterScreen></CounterScreen> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  );
};
export default App;
