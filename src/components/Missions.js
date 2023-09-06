import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/Missions/missionsSlice';
import '../App.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const [activeMembers, setActiveMembers] = useState({});

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
    setActiveMembers({ ...activeMembers, [missionId]: true });
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
    setActiveMembers({ ...activeMembers, [missionId]: false });
  };

  const getMembershipLabel = (mission) => (activeMembers[mission.mission_id] ? 'ACTIVE MEMBER' : 'NOT A MEMBER');

  return (
    <div className="missions-container">
      <div className="mission-heading">
        <h2 className="heading-one">Missions</h2>
        <h2 className="heading-two">Description</h2>
        <h2 className="heading-three">Status</h2>
        <div className="heading-four" />
      </div>
      {missions.map((mission) => (
        <div key={mission.mission_id} className="missions-row">
          <div className="mission-details">
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
            <div className="mission-status">
              <div className="mission-label">
                <span
                  className={classNames('membership-label', {
                    'active-member': activeMembers[mission.mission_id],
                  })}
                >
                  {getMembershipLabel(mission)}
                </span>
              </div>
              <div className="mission-button">
                <button
                  type="button"
                  onClick={() => (
                    activeMembers[mission.mission_id]
                      ? handleLeaveMission(mission.mission_id)
                      : handleJoinMission(mission.mission_id)
                  )}
                >
                  {activeMembers[mission.mission_id] ? 'Leave Mission' : 'Join Mission'}
                </button>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Missions;
