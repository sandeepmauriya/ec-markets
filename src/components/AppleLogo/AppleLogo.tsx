import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

interface AppleLogoProps {
  size?: number;
}

const AppleLogo: React.FC<AppleLogoProps> = ({ size = 40 }) => {
  return (
    <View style={[styles.container, { width: 51, height: 47, borderRadius: 6 }]}> 
      <Svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <G>
          <Path
            d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z"
            fill="#fff"
          />
          <Path
            d="M20.67 16.716c0 .016 0 .03 0 .045-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926-.155 0-.31 0-.462 0-.995-.144-1.798-.932-2.383-1.642C2.675 18.033 1.342 15.323 1.094 11.855c0-.34 0-.679 0-1.019.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.188 2.264 1.456 3.54 3.04 4.292z"
            fill="#fff"
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius is set dynamically
  },
});

export default AppleLogo;
