<?php
// Copyright 1999-2018. Plesk International GmbH. All rights reserved.

/**
 * Class Modules_SshTerminal_CustomButtons
 */
class Modules_SsHTerminal_CustomButtons extends pm_Hook_CustomButtons
{
    /**
     * Adds the custom SSH Terminal button
     *
     * @return array
     */
    public function getButtons()
    {
        return [
            [
                'place' => self::PLACE_COMMON,
                'order' => 2,
                'title' => pm_Locale::lmsg('sshTerminalButtonTitle'),
                'description' => pm_Locale::lmsg('sshTerminalButtonDescription'),
                'icon' => pm_Context::getBaseUrl() . 'images/icon.png',
                'link' => pm_Context::getActionUrl('index', 'index'),
        ];
    }
}
