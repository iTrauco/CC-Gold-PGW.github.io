//#---<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>---#//
//#    ______ _____          _____        _____ _____  _____ _______ _____ _   _  _____ _______ _____ ____  _   _  _____       _____  _               _   _ _   _ ______ _____     #//
//#   |  ____|_   _|   /\   |  __ \      |  __ \_   _|/ ____|__   __|_   _| \ | |/ ____|__   __|_   _/ __ \| \ | |/ ____|     |  __ \| |        /\   | \ | | \ | |  ____|  __ \    #//
//#   | |__    | |    /  \  | |__) |     | |  | || | | (___    | |    | | |  \| | |       | |    | || |  | |  \| | (___       | |__) | |       /  \  |  \| |  \| | |__  | |__) |   #//
//#   |  __|   | |   / /\ \ |  ___/      | |  | || |  \___ \   | |    | | | . ` | |       | |    | || |  | | . ` |\___ \      |  ___/| |      / /\ \ | . ` | . ` |  __| |  _  /    #//
//#   | |     _| |_ / ____ \| |          | |__| || |_ ____) |  | |   _| |_| |\  | |____   | |   _| || |__| | |\  |____) |     | |    | |____ / ____ \| |\  | |\  | |____| | \ \    #//
//#   |_|    |_____/_/    \_\_|          |_____/_____|_____/   |_|  |_____|_| \_|\_____|  |_|  |_____\____/|_| \_|_____/      |_|    |______/_/    \_\_| \_|_| \_|______|_|  \_\   #//
//#                                                                                                                                                                                #//
//#                                                                  Copyright 2019 C.C.Gold All Rights Reserved                                                                   #//
//#                                             Not Affiliated with Fédération Internationale de l'Art Photographique (FIAP) In Any Way                                            #//
//#                                                                                                                                                                                #//
//#  PROGRAM NAME : FIAP Distinction Planner                                                                                                                                       #//
//#        AUTHOR : C.C Gold                                                                                                                                                       #//
//#  DATE CREATED : 20/03/2019                                                                                                                                                     #//
//#       VERSION : 0.0.0.1w                                                                                                                                                      #//
//#                                                                                                                                                                                #//
//#   DESCRIPTION :                                                                                                                                                                #//
//#   A planner to help art photographers prepare for achieving a FIAP distinction                                                                                                 #//
//#   For more information see the provided user manual (F1)                                                                                                                       #//
//#---<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>------<===>---#//


$(document).ready(function () {

    function authFlow(){
        var google = require('googleapis');
        var client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
            null
        );
        return new Promise((resolve, reject) => {
            client.authorize((err, tokens) => {
                if (err) {
                    reject(err);
                } else {
                    google.options({
                        auth: client
                    });
                    resolve();
                }
            });
        });
    }

    authFlow();

    $("div").css({
        "border-color": "#C1E0FF",
        "border-width": "1px",
        "border-style": "solid"
    });

});