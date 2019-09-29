import React,{Component} from 'react'
import './css/Menubar.css'
import ToggleButton from './ToggleButton'
import ExternalIcons from './externalIcons'

export default class Menubar extends Component{

    render(){
        return(
            <header className="navbar">
                <nav className="navbar_comp">
                    <ToggleButton pageActions={this.props.pageActions}/>
                    <div className="icon_holder">
                        <ExternalIcons pageActions={this.props.pageActions}/>
                    </div>
                </nav>
            </header>
        )
    }
}