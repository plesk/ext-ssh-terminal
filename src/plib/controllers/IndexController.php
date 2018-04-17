<?php
// Copyright 1999-2018. Plesk International GmbH.

class IndexController extends pm_Controller_Action
{
    public function indexAction()
    {
        $this->view->pageTitle = $this->lmsg('index.title');
    }
}
