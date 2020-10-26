import React from 'react';
import './App.css';

function Footer(props){
    return (
        <div>
            <table>
                <tr>
                    <td>{props.info.id}</td>
                    <td>{props.info.name}</td>
                    <td>{props.info.age}</td>
                    <td>{props.info.email}</td>
                </tr>
                <br />
            </table>
        </div>
    )
}
export default Footer;
