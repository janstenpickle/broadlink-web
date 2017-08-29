import * as React from 'react';
import { TSMap } from "typescript-map";
import { RemoteData } from '../types/index';

export interface Props {
  remotes: TSMap<string, RemoteData>;
  focus: (remote: string) => void;
  focusedRemote: string;
}

function Hello({ remotes, focus, focusedRemote }: Props) {
  const defaultCard = 'mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-grid mdl-card mdl-shadow--2dp demo-card-image mdl-color--grey-100'

  const remotePanes = remotes.map(function(data: RemoteData, remote: string) {
    if (data.isActive) {
      const cn = () => { if (remote === focusedRemote) {
        return defaultCard + 'mdl-color--white'
      } else {
        return defaultCard
      }
    }

    const doFocus = () => {
      focus(remote);
    }


      return (
        <div id={remote} onClick={doFocus} className={cn()}>
          <div className="mdl-card__title mdl-card--expand">
            <h4>
            sdfsdf
            </h4>
          </div>
            <div className="mdl-card__actions mdl-card--border">
              <span className="mdl-list__item-primary-content">
                <span>{remote}</span>
              </span>
              </div>
        </div>
      )
    } else {
      return ""
    }
  })

  return (
    <div className="page-content mdl-grid">{remotePanes}</div>
  );
}

export default Hello;
