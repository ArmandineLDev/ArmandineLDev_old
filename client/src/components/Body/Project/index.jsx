import React from 'react';
import {projectDatas} from '../../../datas/project';
import ProjectCard from './ProjectCard';

import Separator from '../../commons/Separator';

export const Project = () => {
    const data = projectDatas;
    return (
        <>
        
        <div className='mt-4 space-y-4'>
            <h2 className='h2' id='project'>Projets</h2>
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
