import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  const {
    thumbnailStyle,
    textContainer,
    textStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles
  return (
    <Card>
      <CardSection>
        <View style={ thumbnailContainerStyle }>
          <Image
            style={ thumbnailStyle }
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={ textContainer }>
          <Text style={ textStyle }>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={ imageStyle }/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url) }>
          Buy the Album Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 1,
    marginRight: 10
  }
}
export default AlbumDetail
