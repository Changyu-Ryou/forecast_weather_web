import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1F2023',
    color: 'white',
    fontSize: '14px',
    lineHeight: '140%',
    letterSpacing: '-0.01em',
    padding: '12px 16px',
    fontWeight: '400',
    ['.css-kudwh-MuiTooltip-arrow']: {
      color: '#1F2023',
    },
  },
}));
