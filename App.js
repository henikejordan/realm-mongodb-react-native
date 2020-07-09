import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {useAuth} from './src/AuthProvider';
import {LogInView} from './src/LogInView';
import {AuthProvider} from './src/AuthProvider';
import {TasksProvider} from './src/TasksProvider';
import {TasksView} from './src/TasksView';

const App = () => {
  return (
    <AuthProvider>
      <AppBody />
    </AuthProvider>
  );
};

// The AppBody is the main view within the App. If a user is not logged in, it
// renders the login view. Otherwise, it renders the tasks view. It must be
// within an AuthProvider.
function AppBody() {
  const {user} = useAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {user == null ? (
            <LogInView />
          ) : (
            <TasksProvider projectId="tasktracker">
              <TasksView />
            </TasksProvider>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
