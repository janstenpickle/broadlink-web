import * as React from 'react';
import { TSMap } from 'typescript-map';
import * as Scroll from 'react-scroll'; // Imports all Mixins
import { RemoteData } from '../types/index';

let Link       = Scroll.Link;

export interface Props {
  remotes: TSMap<string, RemoteData>;
  focus: (remote: string) => void;
  toggle: (remote: string, value: boolean) => void;
}

function Links({ remotes, focus, toggle }: Props) {
  const remoteLinks = remotes.map(function(data: RemoteData, remote: string){
    const doFocus = () => {
      focus(remote);
    }

    const doToggle = () => {
      const newActive = !data.isActive;
      toggle(remote, newActive);
      if (newActive) { focus(remote); }
    }

    const remoteLink = () => { if (data) {
        return <Link className="mdl-navigation__link" onClick={doFocus} to={remote}>{remote}</Link>
      } else {
        return <a className="mdl-navigation__link" onClick={doToggle} href="#">{remote}</a>
      }
    }

    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <span>{remoteLink()}</span>
        </span>
        <span className="mdl-list__item-secondary-action">
          <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect">
            <input type="checkbox" id="list-checkbox-1" className="mdl-switch__input" checked={data.isActive} onChange={doToggle} />
          </label>
        </span>
      </li>
    );
  })

  return (
    <div>
      <ul className="mdl-list">
      {remoteLinks}
      </ul>
    </div>
  );
}

export default Links;
