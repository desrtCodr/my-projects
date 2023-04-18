import * as React from 'react';
import {
  Card,
  Grid,
  Button,
  Typography,
  CardActionArea,
  CardContent,
} from '@mui/material';
import fetchActivity from '../api/api';
import Type from '../../components/Type';

export default function NotBored() {
  const [group, setGroup] = React.useState('');
  const [activity, setActivity] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setError('');
    setGroup(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (group === '') {
      setError('Choose a type of activity first!');
      console.log('error:', error);
      return error;
    }
    fetchActivity(group)
      .then((activity) => {
        setActivity(activity.activity);
        console.log(activity);
      })
      .catch((error) => {});
  };

  return (
    <section
      id='notBored'
      className='flex justify-center h-screen bg-center bg-cover bored-img'
    >
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='flex flex-col justify-center items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md z-[2]'>
        <h2 className='mb-5 text-4xl font-bold text-center text-white'>
          You bored?
        </h2>
        <p className='mt-2 text-center text-slate-300'>
          Select an activity category and click the Show Activity to
          find something to do!
        </p>
        <div className='m-8'>
          <Type group={group} handleChange={handleChange} />
        </div>
        <div className='m-8'>
          <Button
            variant='outlined'
            onClick={handleSubmit}
            className='p-5'
          >
            Show Activity
          </Button>
        </div>
        <div className='m-8'>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
                  component='div'
                >
                  {activity ? (
                    <p>{activity}</p>
                  ) : (
                    'Click the "Find Activity" button to see!'
                  )}
                  {error ? <p>{error}</p> : ''}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <Card></Card>
      </div>
    </section>
  );
}
