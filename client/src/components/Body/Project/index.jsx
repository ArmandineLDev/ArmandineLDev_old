import React from 'react';
import {projectDatas} from '../../../datas/project';
import ProjectCard from './ProjectCard';

import Separator from '../../commons/Separator';

const Project = () => {
    const data = projectDatas;
    return (
        <>
        
        <div className='mt-4 space-y-4'>
            <label className='text-2xl font-bold'>Projets</label>
            <>
                {data.map((project) => {
                    return <ProjectCard project={project} key={project.id} />
                    
                })}
            </>
        </div>
        <Separator />
        </>
    )
}

export default Project
