"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
var icons_1 = require("ionicons/icons");
var Content_1 = require("../../Pages/Home/Content");
var Content_2 = require("../../Pages/Login/Content");
var Tabs = function () { return (react_1["default"].createElement(react_router_1.IonReactRouter, null,
    react_1["default"].createElement(react_2.IonTabs, null,
        react_1["default"].createElement(react_2.IonRouterOutlet, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Home", component: Content_1["default"], exact: true }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Login", component: Content_2["default"], exact: true }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", render: function () { return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/Home" }); }, exact: true })),
        react_1["default"].createElement(react_2.IonTabBar, { slot: "bottom", color: "secondary" },
            react_1["default"].createElement(react_2.IonTabButton, { tab: "Home", href: "/Home" },
                react_1["default"].createElement(react_2.IonIcon, { icon: icons_1.home }),
                react_1["default"].createElement(react_2.IonLabel, null, "Home")),
                react_1["default"].createElement(react_2.IonTabButton, { tab: "Login", href: "/Login" },
        react_1["default"].createElement(react_2.IonIcon, { icon: icons_1.personCircle }),
        react_1["default"].createElement(react_2.IonLabel, null, "Login")))))); };
exports["default"] = Tabs;
