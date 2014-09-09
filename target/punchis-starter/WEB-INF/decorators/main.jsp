<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@taglib prefix="page" uri="http://www.opensymphony.com/sitemesh/page" %>
<%@taglib prefix="s" uri="/struts-tags" %>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title><decorator:title default="Punchis Max punch"/></title>
        <!-- Bootstrap -->
        <link href="<s:url value='/css/bootstrap.min.css'/>" rel="stylesheet" />
        <link href="<s:url value='/css/main.css'/>" rel="stylesheet" type="text/css" media="all"/>
        <link href="<s:url value='/css/font-awesome.min.css'/>" rel="stylesheet" type="text/css" media="all"/>
        <!-- Google fonts -->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'/>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
                      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
                      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
                    <![endif]-->
        <script src="<s:url value='/js/jquery-1.11.0.min.js'/>" type="text/javascript"></script>
        <script src="<s:url value='/js/bootstrap.min.js'/>" type="text/javascript"></script>
        <script src="<s:url value='/js/jQValidator1.5b.js'/>" charset="UTF-8" type="text/javascript"></script>
        <script src="<s:url value='/js/base.js'/>" type="text/javascript"></script>

        <decorator:head/>
    </head>
    <body id="page-home">
        <div id="page">
            <div id="header" class="clearfix">
                HEADER
                <hr />
            </div>

            <div id="content" class="clearfix">
                <div id="main">
                    <h3>Main Content</h3>
                    <decorator:body/>
                    <hr />
                </div>

                <div id="sub">
                    <h3>Sub Content</h3>
                </div>


                <div id="local">
                    <h3>Local Nav. Bar</h3>
                    <ul>
                        <li><a href="#">Content page 1</a></li>
                        <li><a href="#">Content page 2</a></li>
                        <li><a href="#">Content page 3</a></li>
                        <li><a href="#">Content page 4</a></li>
                        <li><a href="#">Content page 5</a></li>
                        <li><a href="#">Content page 6</a></li>
                    </ul>
                </div>


                <div id="nav">
                    <div class="wrapper">
                        <h3>Nav. bar</h3>
                        <ul class="clearfix">
                            <li><a href="#">Menu 1</a></li>
                            <li><a href="#">Menu 2</a></li>
                            <li><a href="#">Menu 3</a></li>
                            <li><a href="#">Menu 4</a></li>
                            <li><a href="#">Menu 5</a></li>
                            <li class="last"><a href="#">Menu 6</a></li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>

            <div id="footer" class="clearfix">
                Footer
            </div>

        </div>

        <div id="extra1">&nbsp;</div>
        <div id="extra2">&nbsp;</div>
    </body>
</html>
