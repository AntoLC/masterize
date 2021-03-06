#!/bin/sh

# NAME_APP -- ENV = Variable in docker or dockerfile
echo "Start Entry Point App: ${NAME_APP}"

# If app overload and delete by docker-compose, we create it again then overload it
if [ ! -e ${FULLPATH}/src/App.js ]; then
    # Create folder and go inside
    mkdir /build-dir && echo "mkdir /build-dir"
    cd /build-dir && echo "cd /build-dir"
    
    # Create App
    echo "npx create-react-app ${NAME_APP}"
    npx create-react-app ${NAME_APP}
    
    # Copy app
    echo "cp -r /build-dir/${NAME_APP}/* ${FULLPATH}/"
    cp -r /build-dir/${NAME_APP}/* ${FULLPATH}/
fi

# Goto app and start it
cd ${FULLPATH}/ && echo "cd ${FULLPATH}/"
echo "yarn --check-files"
yarn --check-files
echo "yarn start"
yarn start