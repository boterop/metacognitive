import {Dimensions, StyleSheet} from 'react-native';

var {height, width} = Dimensions.get('window');

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentBox: {
    backgroundColor: '#ffff00',
    height: height - 75,
    width: width - 50,
  },
  box: {
    flexDirection: 'row',
  },
  boxLeft: {
    flexDirection: 'column',
    height: height - 75,
    width: 100,
  },
  boxLeftArrows: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
  },
  boxArrowLeft: {
    width: 40,
    paddingRight: 5,
  },
  boxArrowRight: {
    width: 40,
    paddingLeft: 5,
  },
  boxRight: {
    flexDirection: 'column',
    height: height - 25,
    width: width - 100,
    //backgroundColor: background
  },
  titles: {
    height: 30,
    paddingLeft: 5,
    color: '#0000ff',
    fontSize: 20,
    fontWeight: 'bold',
    width: width - 100,
  },
  example: {
    height: (height - 75 - 60) / 3,
    paddingLeft: 15,
    fontSize: 18,
    width: width - 100,
    textDecorationLine: 'line-through',
    color: '#222222',
  },
  correction: {
    height: (height - 75 - 60) / 3,
    paddingLeft: 15,
    fontSize: 18,
    width: width - 100,
    color: '#222222',
  },
  uses: {
    height: (height - 75 - 60) / 3,
    paddingLeft: 5,
    color: '#ff0000',
    fontSize: 18,
    width: width - 100,
  },
  notes: {
    height: height - 75,
    color: '#222222',
  },
  authors: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: height - 75,
    color: '#222222',
  },
  boxTop: {
    flexDirection: 'row',
    height: 50,
    width: width - 100,
    justifyContent: 'flex-start',
    backgroundColor: '#e3aa1a',
  },
  topButtons: {
    width: (width - 100) / 3,
    height: 50,
  },
  startedButton: {
    height: height,
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000000',
    backgroundColor: '#eeeeee',
  },
  headStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  professor: {
    width: (width - 100) / 2,
    height: 35,
    fontSize: 13,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#222222',
    borderWidth: 2,
    borderColor: '#000000',
  },
  professorTitle: {
    width: (width - 100) / 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    backgroundColor: '#5ff',
    borderColor: '#000000',
    fontWeight: 'bold',
  },
});

export default HomeStyle;
