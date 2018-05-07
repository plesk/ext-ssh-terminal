/*
 * Copyright 2015 Gravitational, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default class AddressResolver {
    constructor(params) {
        this._params = {
            login: null,
            sid: null,
            cluster: null,
            ttyUrl: ':fqdm/modules/ssh-terminal/teleport/v1/webapi/sites/:cluster/connect?access_token=:token&params=:params',
            ttyEventUrl: ':fqdm/modules/ssh-terminal/teleport/v1/webapi/sites/:cluster/sessions/:sid/events/stream?access_token=:token',
            ttyResizeUrl: '/modules/ssh-terminal/teleport/v1/webapi/sites/:cluster/sessions/:sid',
            ...params,
        };
    }

    getConnStr(w, h) {
        const { serverId, ttyUrl, login, sid } = this._params;
        const params = JSON.stringify({
            // eslint-disable-next-line camelcase
            server_id: serverId,
            login,
            sid,
            term: { h, w },
        });

        const encoded = window.encodeURI(params);
        return this.format(ttyUrl).replace(':params', encoded);
    }

    getEventProviderConnStr() {
        return this.format(this._params.ttyEventUrl);
    }

    getResizeReqUrl() {
        return this.format(this._params.ttyResizeUrl);
    }

    getWsHostName() {
        const prefix = location.protocol === 'https:' ? 'wss://' : 'ws://';
        const hostport = location.hostname + (location.port ? `:${location.port}` : '');
        return `${prefix}${hostport}`;
    }

    format(url) {
        return url
            .replace(':fqdm', this.getWsHostName())
            .replace(':token', this._params.token)
            .replace(':cluster', this._params.cluster)
            .replace(':sid', this._params.sid);
    }
}
