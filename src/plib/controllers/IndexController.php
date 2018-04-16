<?php
// Copyright 1999-2018. Plesk International GmbH.

/**
 * Class IndexController
 */
class IndexController extends pm_Controller_Action
{
    /**
     * Index Action
     */
    public function indexAction()
    {
        $this->view->pageTitle = $this->lmsg('title');
    }
}
