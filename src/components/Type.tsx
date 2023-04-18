import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card, CardContent } from '@mui/material';

const groups = [
  'education',
  'recreational',
  'social',
  'diy',
  'charity',
  'cooking',
  'relaxation',
  'music',
  'busywork',
];

interface TypeProps {
  group: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Type({ group, handleChange }: TypeProps) {
  return (
    <Card variant='outlined'>
      <CardContent>
        <FormControl>
          <FormLabel
            id='label'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              center: 'center',
            }}
          >
            Activity Catagories
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='recreation'
            name='radio-buttons-group'
            value={group}
            onChange={handleChange}
          >
            {groups.map((group, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={group}
                  control={<Radio />}
                  label={group}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
