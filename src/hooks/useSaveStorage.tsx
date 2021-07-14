import { useEffect } from 'react';
import { useAppSelector } from '../store/store';
import { storeDistanceSliceData } from '../infrastructure/asyncStorage/distanceSlice';

const useSaveStorage = () => {
  const distanceState = useAppSelector((state) => state.distance);

  useEffect(() => {
    console.log('useSaveStorage');
    storeDistanceSliceData(distanceState);
    console.log(distanceState);
  }, [distanceState]);
};

export default useSaveStorage;
