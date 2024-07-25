import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Box, Center, Text, VStack, Icon, HStack, Button } from 'native-base';
import { RNCamera } from 'react-native-camera';

const Firstscreen = () => {
  const [scannedData, setScannedData] = useState('');

  const handleBarCodeRead = (result) => {
    if (scannedData === '') {
      setScannedData(result.data);
      Alert.alert('QR Code Scanned', result.data, [{ text: 'OK' }]);
    }
  };

  return (
    <Box flex={1} bg="gray.800">
      <Center flex={1}>
        <RNCamera
          style={styles.preview}
          onBarCodeRead={handleBarCodeRead}
          captureAudio={false}
        />
      </Center>
      <Box position="absolute" bottom={10} width="100%">
        <VStack space={4} alignItems="center">
          <HStack alignItems="center">
            <Text color="white" fontSize="2xl" fontWeight="bold" ml={2}>
              Scan a QR Code
            </Text>
          </HStack>
          {scannedData ? (
            <Button
              onPress={() => setScannedData('')}
              colorScheme="primary"
              _text={{ color: 'white' }}
            >
              Scan Again
            </Button>
          ) : (
            <Text color="white" fontSize="md">
              No QR code scanned yet
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Firstscreen;
