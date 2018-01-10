import * as React from 'react';
import { ButtonData } from '../types/index';

interface Props {
  buttons: ButtonData[];
  fetchButtons(): void;
}

export function renderButton(buttonData: ButtonData) {
  const baseClass = 'mdl-button mdl-js-button mdl-js-ripple-effect'

  const buttonType = () => {
    if (buttonData.icon === undefined) {
      return ' mdl-button--raised'
    } else {
      return ' mdl-button--fab mdl-button--mini-fab'
    }
  }

  const colored = () => {
    const baseColored = baseClass + buttonType();
    if (buttonData.colored)  {
      return baseColored + ' mdl-button--colored';
    } else {
      return baseColored;
    }
  }

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

  const content = () => {
    if (buttonData.label === undefined) {
      return <i className="material-icons">{buttonData.icon}</i>
    } else {
      return (buttonData.label || buttonData.name)
    }
  }

  const className = () => {
    if (buttonData.newRow) {
      return 'newrow-button'
    } else {
      return 'button'
    }
  }

  return(
    <div key={buttonData.name} className={className()}>
      <button className={colored()} onClick={callRest}>
        {content()}
      </button>
    </div>
  );
}

export default class Activities extends React.Component<Props,{}> {
  public componentDidMount() {
    this.props.fetchButtons();
  }

  public render() {
    const renderedButtons = this.props.buttons.map((buttonData: ButtonData) =>  renderButton(buttonData));

    return(<div>
      {renderedButtons}
    </div>);
  }
};
