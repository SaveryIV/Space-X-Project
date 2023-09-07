import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/Rockets/rocketsSlice';
import RocketCard from './rocketCard';
import '../App.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, pending, error } = useSelector((store) => store.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  let content;

  if (!pending && !error && Array.isArray(rockets)) {
    content = (
      <div className="rockets">
        {rockets.map((rocket) => (
          <RocketCard key={rocket.id} props={rocket} />
        ))}
      </div>
    );
  }

  if (pending) {
    content = <h1>Fetching Rockets</h1>;
  }
  if (error) {
    content = <h1>Error occured while fetching Rockets</h1>;
  }

  return (
    <section className="rocket-section">
      {content}
    </section>
  );
};

export default Rockets;
