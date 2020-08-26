"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@ionic/react");
require("./Style.scss");
var hidden = true;
function fakeLogin() {
    console.log("fakeLogin was clicked!");
    switch (hidden) {
        case true:
            hidden = false;
            console.log("was true");
            break;
        case false:
            hidden = true;
            console.log("was false");
            break;
    }
}
var Login = function () {
    return (react_1["default"].createElement(react_2.IonPage, null,
        react_1["default"].createElement(react_2.IonHeader, { collapse: "condense" },
            react_1["default"].createElement(react_2.IonToolbar, { color: "secondary" },
                react_1["default"].createElement(react_2.IonTitle, null, "Login"))),
        react_1["default"].createElement(react_2.IonContent, { fullscreen: true, color: "primary" },
            react_1["default"].createElement(react_2.IonCard, { color: "tertiary" },
                react_1["default"].createElement(react_2.IonCardContent, { color: "primary" },
                    react_1["default"].createElement(react_2.IonLabel, { hidden: hidden, className: "ErrorLabel", color: "danger" }, "E-mail or Password is wrong!"),
                    react_1["default"].createElement(react_2.IonList, { color: "dark", className: "Container" },
                        react_1["default"].createElement(react_2.IonItem, { color: "tertiary", className: "InputSize" },
                            react_1["default"].createElement(react_2.IonLabel, { position: "floating" }, "E-mail"),
                            react_1["default"].createElement(react_2.IonInput, { type: "email" })),
                        react_1["default"].createElement(react_2.IonItem, { color: "tertiary", className: "InputSize" },
                            react_1["default"].createElement(react_2.IonLabel, { position: "floating" }, "Password"),
                            react_1["default"].createElement(react_2.IonInput, { type: "password" }))),
                    react_1["default"].createElement(react_2.IonButton, { className: "SignInButton", type: "button", size: "default", onClick: function () { return fakeLogin(); }, color: "success" }, "Sign In"),
                    react_1["default"].createElement(react_2.IonButton, { className: "SignUpButton", type: "button", size: "default", color: "medium" }, "Sign Up"))))));
};
exports["default"] = Login;
