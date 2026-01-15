# Simple Journal App

A cross-platform mobile journal app.  
This app allows users to write, save, and view journal entries using a simple bottom-tab navigation interface.


## Features

- Home screen with welcome message
- Journal screen displaying all entries
- New Entry screen to create and save entries
- Simple and clean user interface
- Works on both **iOS** and **Android**

## Future Changes/Additions

- Automatically switch to Journal screen after a new journal entry has been submitted
- Better design
- Add dates to entries
- Delete entries
- Edit entries
- More Homepage features
-- Number of current entries
- Individual entry view
- Add photos to entries
- Categories

## Other Notes

- Currently experiencing errors upon app launch through both expo go and Android emulator (expected dynamic type 'boolean', but had type 'string' & java.lang.String cannot be cast to java.lang.Boolean)    
- A Screenshot of the Android emulator error can be found in the repository called boolError.png

- IMPORTANT UPDATE: Utilizing the JSdebugger allowed me to finally fix the main cause of the above error. Explaination below:    
-- Upgraded react-native-screens and react-navigation to latest versions
-- Exact terminal line: npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
-- Added enableScreens(false)