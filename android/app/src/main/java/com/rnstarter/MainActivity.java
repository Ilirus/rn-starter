package com.rnstarter;
//react-native-screens
import android.os.Bundle;
import com.facebook.react.ReactFragmentActivity; // import com.facebook.react.ReactActivity;
//react-native-screens
// react-native-gesture-handler
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
// react-native-gesture-handler

public class MainActivity extends ReactFragmentActivity { //react-native-screens ReactActivity => ReactFragmentActivity
  //react-native-screens
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
  }
  //react-native-screens
  @Override
  protected String getMainComponentName() {
      return "RNStarter";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
