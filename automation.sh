#!/bin/bash

source ./utils/shellScripting/constants/colours.sh
source ./utils/shellScripting/constants/constants.sh
source ./utils/shellScripting/funcs/helpers.sh
source ./utils/shellScripting/funcs/contexts.sh
source ./utils/shellScripting/funcs/client.sh
source ./utils/shellScripting/funcs/api.sh
source ./utils/shellScripting/funcs/deploy.sh
source ./utils/shellScripting/funcs/initialSetup.sh
source ./utils/shellScripting/funcs/db_backup_local.sh

cat << EOF
This script runs to help you develop your application much faster.
EOF

showMenuBar

run() {
    local selected
    local isRunning=0
    while [[ isRunning -eq 0 ]]
    do
        read -p "Choose an option (0 to show menubar): " selected
        [ $selected == Q ] && exit 0
        if [[ ${OPTIONS[*]} =~ $selected ]]
        then
            [ $selected == 0 ] && showMenuBar
            [ $selected == 1 ] && initialSetupInMAcOrLinux
            [ $selected == 2 ] && initialSetupInWindows
            [ $selected == 3 ] && createReactComponent
            [ $selected == 4 ] && createReactBaseComponent
            [ $selected == 5 ] && createReactPage
            [ $selected == 6 ] && createReactCard
            [ $selected == 7 ] && createReactModal
            [ $selected == 8 ] && createReactSubComp
            [ $selected == 9 ] && addDjangoApp
            [ $selected == 10 ] && initialSetupInServer
            [ $selected == 11 ] && deployToStaging
            [ $selected == 12 ] && deployToProd
            [ $selected == 13 ] && makeBackupOfDb
            [ $selected == 14 ] && restoreDb
        else
            run
        fi
    done
    return 0
}

run