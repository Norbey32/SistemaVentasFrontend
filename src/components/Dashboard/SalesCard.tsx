import { Card, CardContent, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

interface SalesCardProps {
  title: string;
  value: string | number;
  trend: 'positive' | 'negative';
  trendText: string;
}

const SalesCard = ({ title, value, trend, trendText }: SalesCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {value}
        </Typography>
        <Typography 
          variant="body2" 
          component="p" 
          color={trend === 'positive' ? 'success.main' : 'error.main'}
          sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
        >
          {trend === 'positive' ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
          {trendText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SalesCard;