import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	View,
	Button,
	ScrollView,
	TextInput,
	StatusBar,
} from 'react-native';
import {
	ColorsConst,
	Pragmatic,
	Professor,
	Semantic,
	Syntactic,
	TextConstants,
	ViewsConst,
} from './constants';
import HomeStyle from './style/Home';

let professorTable;

const App = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [textType, setTextType] = useState('SY');
	const [use, setUse] = useState('');
	const [example, setExample] = useState('');
	const [correction, setCorrection] = useState('');
	const [note, setNote] = useState('');
	const [hasNote, setHasNote] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [visible, setVisible] = useState('text');

	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;

			professorTable = new Professor().getMatrix().map(eachItem => (
				<View style={{ flexDirection: 'row' }}>
					<Text
						onPress={() => goToChallenge(eachItem[0])}
						selectable
						style={getProfessorStyle(eachItem[1])}>
						{eachItem[0]}
					</Text>
					<Text
						onPress={() => goToChallenge(eachItem[0])}
						selectable
						style={getProfessorStyle(eachItem[1])}>
						{eachItem[1]}
					</Text>
				</View>
			));
		}

		typeConst =
			textType == 'SY'
				? new Syntactic()
				: textType == 'P'
				? new Pragmatic()
				: new Semantic();

		let num = pageNumber;

		if (num < 1) {
			num = 1;
			setPageNumber(num);
		}

		if (num >= typeConst.getSize()) {
			num = typeConst.getSize();
			setPageNumber(num);
		}

		setUse(typeConst.getUses()[num - 1]);
		setExample(
			typeConst.getExamples()[num - 1] == 'null'
				? ''
				: typeConst.getExamples()[num - 1],
		);
		setCorrection(
			typeConst.getCorrections()[num - 1] == 'null'
				? ''
				: typeConst.getCorrections()[num - 1],
		);

		let pageNote = typeConst.getNotes()[num - 1];
		setNote(pageNote);
		setHasNote(pageNote !== 'null');
	}, [pageNumber, textType]);

	const isNumber = text => /^-{0,1}\d+$/.test(text);

	const buttonActionPerformed = button => {
		switch (button) {
			case 'left':
				setPageNumber(parseInt(pageNumber) - 1);
				setVisible(ViewsConst.TEXT);
				break;
			case 'right':
				setPageNumber(parseInt(pageNumber) + 1);
				setVisible(ViewsConst.TEXT);
				break;
			case 'professor':
				setVisible(ViewsConst.PROFESSOR);
				break;
			case 'authors':
				setVisible(ViewsConst.AUTHORS);
				break;
			case 'exercises':
				setVisible(ViewsConst.EXERCISES);
				break;
			case 'note':
				setVisible(ViewsConst.NOTES);
				break;
		}
	};

	const _noteButton = () =>
		hasNote ? (
			<Button
				onPress={() => buttonActionPerformed('note')}
				title='note'
				color={ColorsConst.button}
				accessibilityLabel='Note Button'
			/>
		) : null;

	const _texts = () => {
		if (visible === ViewsConst.TEXT) {
			return (
				<View>
					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.uses} selectable>
							{use}
						</Text>
					</ScrollView>

					<Text style={HomeStyle.titles}>Example:</Text>

					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.example} selectable>
							{example}
						</Text>
					</ScrollView>

					<Text style={HomeStyle.titles}>Correction:</Text>

					<ScrollView style={HomeStyle.scrollView}>
						<Text style={HomeStyle.correction} selectable>
							{correction}
						</Text>
					</ScrollView>
				</View>
			);
		} else if (visible === ViewsConst.AUTHORS) {
			return <Text style={HomeStyle.authors}>{TextConstants.authors}</Text>;
		} else if (visible === ViewsConst.EXERCISES) {
			return (
				<ScrollView style={HomeStyle.scrollView}>
					<Text style={{ fontSize: 13, color: '#222222' }} selectable>
						{TextConstants.exercises}
					</Text>
				</ScrollView>
			);
		} else if (visible === ViewsConst.NOTES) {
			return (
				<ScrollView style={HomeStyle.scrollView}>
					<Text style={HomeStyle.notes} selectable>
						{note}
					</Text>
				</ScrollView>
			);
		} else if (visible === ViewsConst.PROFESSOR) {
			return <ScrollView>{professorTable}</ScrollView>;
		}
	};

	const goToChallenge = item => {
		if (item.includes('#')) {
			setTextType(item.split('#')[0]);
			setPageNumber(item.split('#')[1]);
			setVisible(ViewsConst.TEXT);
		}
	};

	const getProfessorStyle = item => {
		if (item == 'DESCRIPTION') {
			return HomeStyle.professorTitle;
		} else {
			return HomeStyle.professor;
		}
	};

	const onChangeText = text => {
		if (isNumber(text)) {
			let num = parseInt(text);

			setPageNumber(num);
		}
	};

	const changeChallenge = challenge => {
		setTextType(challenge);
		setPageNumber(1);
		setVisible(ViewsConst.TEXT);
	};

	return (
		<View style={HomeStyle.container}>
			<StatusBar hidden />
			{isStarted ? (
				<View style={HomeStyle.box}>
					<View style={HomeStyle.boxLeft}>
						<TextInput
							style={{
								height: 50,
								width: 100,
								borderColor: 'black',
								borderBottomWidth: 2,
								textAlign: 'center',
								color: '#000000',
								fontSize: 30,
							}}
							onChangeText={text => onChangeText(text)}
							value={'' + pageNumber}
							keyboardType='number-pad'
						/>
						<View style={HomeStyle.boxLeftArrows}>
							<View style={HomeStyle.boxArrowLeft}>
								<Button
									onPress={() => buttonActionPerformed('left')}
									title='<'
									color={ColorsConst.button}
								/>
							</View>
							<View style={HomeStyle.boxArrowRight}>
								<Button
									onPress={() => buttonActionPerformed('right')}
									title='>'
									color={ColorsConst.button}
								/>
							</View>
						</View>
						<Button
							onPress={() => buttonActionPerformed('professor')}
							title='professor'
							color={ColorsConst.button}
						/>
						<Button
							onPress={() => buttonActionPerformed('authors')}
							title='authors'
							color={ColorsConst.button}
						/>
						<Button
							onPress={() => buttonActionPerformed('exercises')}
							title='exercises'
							color={ColorsConst.button}
						/>
						{_noteButton()}
					</View>
					<View style={HomeStyle.boxRight}>
						<View style={HomeStyle.boxTop}>
							<View style={HomeStyle.topButtons}>
								<Button
									onPress={() => changeChallenge('SY')}
									title={'syntactic\nchallenges'}
									style={HomeStyle.topButtons}
									color='#3C8515'
								/>
							</View>
							<View style={HomeStyle.topButtons}>
								<Button
									onPress={() => changeChallenge('P')}
									title={'pragmatic\nchallenges'}
									style={HomeStyle.topButtons}
									color='#3C8515'
								/>
							</View>
							<View style={HomeStyle.topButtons}>
								<Button
									onPress={() => changeChallenge('SE')}
									title={'semantic\nchallenges'}
									style={HomeStyle.topButtons}
									color='#3C8515'
								/>
							</View>
						</View>
						{_texts()}
					</View>
				</View>
			) : (
				<Text
					onPress={() => setIsStarted(true)}
					style={HomeStyle.startedButton}>
					{TextConstants.start}
				</Text>
			)}
		</View>
	);
};

export default App;
