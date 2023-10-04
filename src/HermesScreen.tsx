import React from 'react';
import {Text} from 'react-native';

const isHermes = () => !!global.HermesInternal;

const hermesDisabled = () => <Text>Hermes: not running</Text>;

const hermesStats = () => {
  const instrumentedStats = global.HermesInternal.getInstrumentedStats();
  const ONE_MB = 1024 * 1024;
  return (
    <>
      <Text>Instruments Stats</Text>
      <Text>VM Experiments: {instrumentedStats.js_VMExperiments}</Text>
      <Text>
        Allocated: {(instrumentedStats.js_allocatedBytes / ONE_MB).toFixed(2)}{' '}
        MB
      </Text>
      <Text>GC CPU Time: {instrumentedStats.js_gcCPUTime}</Text>
      <Text>GC Time: {instrumentedStats.js_gcTime}</Text>
      <Text>Heap Size: {instrumentedStats.js_heapSize}</Text>
      <Text>
        Malloc Size Estimate: {instrumentedStats.js_mallocSizeEstimate}
      </Text>
      <Text>
        Mark Stack Overflows: {instrumentedStats.js_markStackOverflows}
      </Text>
      <Text>Num GCs: {instrumentedStats.js_numGCs}</Text>
      <Text>
        Total Allocated:{' '}
        {(instrumentedStats.js_totalAllocatedBytes / ONE_MB).toFixed(2)} MB
      </Text>
      <Text>VA Size: {instrumentedStats.js_vaSize}</Text>
      <Text>--//--</Text>
    </>
  );
};

const hermesProperties = () => {
  const runtimeProperties = global.HermesInternal.getRuntimeProperties();
  return (
    <>
      <Text>Runtime Properties</Text>
      <Text>Build: {runtimeProperties.Build}</Text>
      <Text>
        Builtins Frozen:{' '}
        {runtimeProperties['Builtins Frozen'] ? 'true' : 'false'}
      </Text>
      <Text>Bytecode Version: {runtimeProperties['Bytecode Version']}</Text>
      <Text>CommonJS Modules: {runtimeProperties['CommonJS Modules']}</Text>
      <Text>GC: {runtimeProperties.GC}</Text>
      <Text>
        OSS Release Version: {runtimeProperties['OSS Release Version']}
      </Text>
      <Text>VM Experiments: {runtimeProperties['VM Experiments']}</Text>
      <Text>--//--</Text>
    </>
  );
};

export const HermesScreen = () => {
  return isHermes() ? (
    <>
      {hermesStats()}
      {hermesProperties()}
    </>
  ) : (
    <>{hermesDisabled()}</>
  );
};
