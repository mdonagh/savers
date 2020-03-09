import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
const valid = require('card-validator');

class CardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      name: '',
      expirationDate: '',
      csvNum: '',
      edit: false,
      validCard: true,
    };
  }

  validateCard = async () => {
    const numberValidation = valid.number(this.state.cardNumber);
    if (!numberValidation.isValid) {
      this.setState({ validCard: false });
      return;
    }

    this.setState({
      validCard: numberValidation.card,
    });
  };

  handleSave = async () => {
    this.validateCard().then(() => {
      const {
        validCard,
        cardNumber,
        name,
        expirationDate,
        csvNum,
      } = this.state;
      if (validCard) {
        // this.props.saveCard({
        //   cardNumber,
        //   name,
        //   expirationDate,
        //   csvNum,
        // });
        this.toggleForm();
      }
    });
  };

  toggleForm = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  };

  handleChange = async (key, val) => {
    await this.setState({ [key]: val });
    this.validateCard();
  };

  renderCardForm = () => {
    const { validCard } = this.state;
    return (
      <View style={[styles.cardBottom, {flexDirection: 'column'}]}>
        <Text style={styles.inputLabel}>Card Number</Text>
        {!validCard && <Text style={styles.error}>invalid</Text>}
        <TextInput style={styles.input} onChangeText={(text) => this.handleChange('cardNumber', text)}/>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput style={styles.input}  onChangeText={(text) => this.handleChange('name', text)}/>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailInputWrapper}>
            <Text style={styles.inputLabel}>Expiration Date</Text>
            <TextInput style={styles.input}  onChangeText={(text) => this.handleChange('expirationDate', text)}/>
          </View>
          <View style={styles.cardDetailInputWrapper}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput style={styles.input}  onChangeText={(text) => this.handleChange('csvNum', text)}/>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderCardButtons = () => {
    return (
      <View style={styles.cardBottom}>
        <TouchableOpacity onPress={this.props.popCard} style={styles.removeButton}>
          <Text style={styles.buttonText}>REMOVE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={this.toggleForm}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const cardIconNames = {
      'visa': 'cc-visa',
      'mastercard': 'cc-mastercard',
      'american-express': 'cc-amex',
      'diners-club': 'cc-diners-club',
      'discover': 'cc-discover',
      'jcb': 'cc-jcb',
    }
    const { edit, validCard, cardNumber } = this.state;
    const bottomSection = edit
      ? this.renderCardForm()
      : this.renderCardButtons();
    let lastFourNum = '0000';
    let cardType = '';
    let iconName = '';
    if (validCard) {
      const cardNumArr = cardNumber.split('');
      lastFourNum = cardNumArr
        .slice(cardNumArr.length - 4, cardNumArr.length)
        .join('');
      cardType = validCard.type;
      iconName = cardIconNames[cardType] ? cardIconNames[cardType] : 'credit-card'
    }

    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
          {
          cardType ? (
            <Icon name={iconName} size={25} color="#2196f3" />
          ) : (
            <View />
          )}
          <Text style={styles.hiddenCardNum}>•••• •••• ••••</Text>
          <Text style={styles.lastFourCardNum}>{lastFourNum}</Text>
        </View>
        {bottomSection}
      </View>
    );
  }
}

export default CardInput;
