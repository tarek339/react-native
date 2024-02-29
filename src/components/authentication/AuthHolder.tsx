import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {scrollViewChild} from '../../assets/theme/styles';
import useDarkMode from '../../hooks/useDarkMode';
import {width} from '../../assets/theme/breakpoints';
import HeaderMenu from './HeaderMenu';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthHolder = () => {
  const [firstBtnFX, setFirstBtnFX] = useState(false);
  const [secondBtnFX, setSecondBtnFX] = useState(false);
  const scrollViewRef = useRef<ScrollView & NativeScrollEvent>(null);
  const {colors} = useDarkMode();

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollViewRef.current) return;
    const scrollDistance: number = width;
    const currentOffset: number = scrollViewRef.current.contentOffset
      ? scrollViewRef.current.contentOffset.x
      : 0;

    const newOffset: number =
      direction === 'left'
        ? Math.max(currentOffset - scrollDistance, 0)
        : currentOffset + scrollDistance;
    scrollViewRef.current.scrollTo({x: newOffset, y: 0, animated: true});
  };

  const scrollLeft = useCallback(() => {
    scroll('left');
    setFirstBtnFX(true);
    setSecondBtnFX(false);
  }, [firstBtnFX, secondBtnFX]);

  const scrollRight = useCallback(() => {
    scroll('right');
    setSecondBtnFX(true);
    setFirstBtnFX(false);
  }, [secondBtnFX, firstBtnFX]);

  useEffect(() => {
    scrollLeft();
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const scrolledRatio =
      contentOffset.x / (contentSize.width - layoutMeasurement.width);
    const scrolledWidth = scrolledRatio * contentSize.width;
  };

  return (
    <>
      <HeaderMenu
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        firstBtnColor={firstBtnFX ? colors.buttonFocused : ''}
        secondBtnColor={secondBtnFX ? colors.buttonFocused : ''}
      />
      <ScrollView>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          decelerationRate={'fast'}>
          <View style={scrollViewChild.container}>{/* <SignIn /> */}</View>
          <View style={scrollViewChild.container}>{/* <SignUp /> */}</View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default AuthHolder;
