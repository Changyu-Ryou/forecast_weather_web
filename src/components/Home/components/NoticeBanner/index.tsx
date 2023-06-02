import useFormContextHook from '../../../../hooks/useFormContextHook';
import CaveFilterNotice from './CaveFilterNotice';
import KorokFilterNotice from './KorokFilterNotice';

const NoticeBannerList = () => {
  const { watch } = useFormContextHook();
  const closedNoticeBanner = watch('closedNoticeBanner') ?? [];

  return (
    <>
      {closedNoticeBanner?.includes('caveFilterNotice') ? null : <CaveFilterNotice />}
      {closedNoticeBanner?.includes('korokFilterNotice') ? null : <KorokFilterNotice />}
    </>
  );
};

export default NoticeBannerList;
