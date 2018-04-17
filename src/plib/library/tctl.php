<?php
require_once('sdk.php');

function request($url, array $curlOptions = null)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($curl, CURLOPT_SSLCERT, '/var/lib/teleport/admin.tlscert');
    curl_setopt($curl, CURLOPT_SSLKEY, '/var/lib/teleport/admin.key');
//    curl_setopt($curl, CURLOPT_SSH_PUBLIC_KEYFILE, '/var/lib/teleport/admin.cert');
//    curl_setopt($curl, CURLOPT_SSH_PRIVATE_KEYFILE, '/var/lib/teleport/admin.key');
//    curl_setopt($curl, CURLOPT_CAINFO, '/var/lib/teleport/admin.tlscacert');

    curl_setopt($curl, CURLOPT_HEADER, 'Host: teleport.cluster.local');
    curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 30);

    $method = 'GET';
    if (is_array($curlOptions)) {
        curl_setopt_array($curl, $curlOptions);
        if (!empty($curlOptions[CURLOPT_CUSTOMREQUEST])) {
            $method = $curlOptions[CURLOPT_CUSTOMREQUEST];
        } elseif (!empty($curlOptions[CURLOPT_POST])) {
            $method = 'POST';
        }
    }

    \pm_Log::info("Send request: $method $url");
    $content = curl_exec($curl);
    $status = curl_getinfo($curl);
    \pm_Log::debug("Received response: $content");

    if (curl_errno($curl)) {
        throw new \pm_Exception(curl_error($curl));
    }
    if ($status['http_code'] == 404) {
        throw new \pm_Exception("Resource not found: $url", $status['http_code']);
    } elseif ($status['http_code'] >= 400) {
        throw new \pm_Exception('HTTP code: ' . $status['http_code'], $status['http_code']);
    }

    return $content;
}

$url = "https://localhost:3025/v2/oidc/connectors";

$data = [
    'connector' => [
        'kind' => 'oidc',
        'version' => 'v2',
        'metadata' => [
            'name' => 'example-oidc-connector',
        ],
        'spec' => [
            'issuer_url' => 'https://oidc.example.com',
            'client_id' => 'xxxxxxxx.example.com',
            'client_secret' => 'zzzzzzzzzzzzzzzzzzzzzzzz',
            'redirect_url' => 'https://teleport-proxy.example.com:3080/v1/webapi/oidc/callback',
            'display' => 'Login with Example',
            'scope' =>['group'],
            'claims_to_roles' => [
                [
                    'claim' => 'group',
                    'value' => 'admin',
                    'roles' => ['admin'],
                ],
            ],
        ],
    ],
    'ttl' => 0,
];

$response = request($url, [CURLOPT_POST => json_encode($data)]);
var_dump($response);
