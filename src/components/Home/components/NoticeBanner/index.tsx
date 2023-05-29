import useFormContextHook from '../../../../hooks/useFormContextHook';
import CaveFilterNotice from './CaveFilterNotice';

const NoticeBannerList = () => {
  const { watch } = useFormContextHook();
  const closedNoticeBanner = watch('closedNoticeBanner', []) ?? [];

  return closedNoticeBanner?.includes('caveFilterNotice') ? null : <CaveFilterNotice />;
};

export default NoticeBannerList;
