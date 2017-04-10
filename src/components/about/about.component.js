'use strict';

// IMPORT
import styles from './about.style.css';

let app = angular.module('app');

app.component('aboutPage', {

    // TEMPLATE
    template: require('./about.template.html'),

    // CONTROLLER
    controller: ($scope, aboutService) => {
        document.title = "About // Elliot Evans";

        aboutService
            .getAboutHeadingText()
            .then((response) => {
                console.log('response', response);

                let _pageHeading = response.data.pageHeading;
                let _pageSubHeading = response.data.pageSubHeading;
                let _languages = response.data.language;

                $scope.languages = _languages;

                console.log($scope.languages);

                //test
                $scope.test = require('./html_logo.png')

                $scope.pageHeading = _pageHeading;
                $scope.pageSubHeading = _pageSubHeading;  

            }, (response, status) => {

                response.data.error = {
                    status: status,
                    statusMessage: statusText,
                    customError: "unable to find text",
                    dataError: data
                };

                let _errorJSON = response.data.error;
                console.log(_errorJSON);
            });
    }
});