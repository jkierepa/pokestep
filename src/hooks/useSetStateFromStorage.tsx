import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { getDistanceSliceData } from '../infrastructure/asyncStorage/distanceSlice';
import { setDistanceState } from '../store/distance/slice';

const useSetStateFromStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      console.log('useSetStateFromStorage');
      const data = await getDistanceSliceData();
      if (data) {
        dispatch(setDistanceState(data));
      }
    })();
  }, []);
};

export default useSetStateFromStorage;
