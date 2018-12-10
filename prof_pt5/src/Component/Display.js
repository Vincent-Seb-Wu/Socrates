import React from 'react';

const Display = (props) => (
    <table><tbody>
        <tr style={{
            backgroundColor: 'black', 
            color: 'white', 
        }}>
            <th>Student</th>
            <th>Status</th>
            <th>Willingness</th>
        </tr>
        {Object.entries(props.students).map((student, index) => (
            <tr style={
                student[1].selected ? 
                    {backgroundColor: 'rgba(0,255,255,0.4)'}
                : 
                    {backgroundColor: 'rgba(255,255,255,0)'}
            } key={index} nap={console.log(student[1])}>
                <th>{student[0]}</th>
                <th>{student[1].selected ? 'rating...' : 'ok'}</th>
                <th>{String(student[1].rating)}</th>
            </tr>
        ))}
    </tbody></table>
);

export default Display;
