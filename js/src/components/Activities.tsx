import * as React from 'react';
import { ButtonData } from '../types/index';

interface Props {
  activities: ButtonData[];
  fetchActivities(): void;
}

export function renderButton(buttonData: ButtonData) {

  const mode = () => {
    if (buttonData.isMacro) {
      return 'macro'
    } else {
      return 'send'
    }
  }

  const callRest = () => {
    fetch('http://192.168.1.103:5000/' + mode() + '/' + buttonData.name)
  }

  return(
    <div key={buttonData.name} className='button'>
      <button className='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised' onClick={callRest}>
        {(buttonData.label || buttonData.name)}
      </button>
    </div>
  );
}

export default class MainButtons extends React.Component<Props,{}> {
  public componentDidMount() {
    this.props.fetchActivities();
  }

  public render() {
    const renderedButtons = this.props.activities.map((buttonData: ButtonData) =>  renderButton(buttonData));

    return(<div className='center-align mdl-color--grey-100 mdl-cell--12-col'>
      {renderedButtons}
    </div>);
  }
};
