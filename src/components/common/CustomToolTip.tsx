import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#598CF2',
    color: 'white',
    fontSize: '14px',
    lineHeight: '150%',
    ['.css-kudwh-MuiTooltip-arrow']: {
      color: '#598CF2',
    },
  },
}));
