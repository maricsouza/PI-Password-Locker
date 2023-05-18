import HeaderDashboard from '@/components/HeaderDashboard';
import React  from 'react'
import style from '../dashboard/style.module.scss'

export default function dashboard() {
      return (
      <div>
       <div className={style.container}>
        <HeaderDashboard/>
       </div>
      </div>
    );
}