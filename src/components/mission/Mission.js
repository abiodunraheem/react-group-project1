import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-spinners-css';
import style from './Mission.module.css';
import { displayMissionFunction } from '../../redux/mission/Mission';

const propTypes = {};

const defaultProps = {};

const Mission = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionReducer);
  useEffect(() => {
    dispatch(displayMissionFunction());
  }, []);
  return (
    <div>
      {missionList.isLoading && <div className={style.spinner}><Spinner color="#ffff" /></div>}
      <div className={style.table}>
        <div className={style.tablerow}>
          <div className={style.tablehead}>Mission</div>
          <div className={style.tablehead}>Description</div>
          <div className={style.tablehead}>Status</div>
          <div className={style.tablehead}> </div>

        </div>
        {missionList.response.map((el, index) => (
          <div className={`${style.tablerow}`} style={index % 2 === 0 ? { backgroundColor: 'silver' } : { backgroundColor: 'white' }} key={el.mission_id}>
            <div className={style.tablecell}><p className={style.btn}>{el.mission_name}</p></div>
            <div className={style.tablecell}>
              <p className={style.desk}>
                {el.description}
              </p>
            </div>
            <div className={style.tablecell}><button className={style.btn} type="button">Not a member</button></div>
            <div className={style.tablecell}><button className={style.btn} type="button">Join mission</button></div>

          </div>
        ))}

      </div>
    </div>
  );
};

Mission.propTypes = propTypes;
Mission.defaultProps = defaultProps;

export default Mission;
