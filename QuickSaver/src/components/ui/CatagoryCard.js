import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const LastCatagory = props => {
  const {
    data,
    onStarPress,
    active = false,
    dispatch,
    chooseCatagory,
    removeCatagory
  } = props;

  return (
    <View style={styles.lastCatagoryCard}>
      <Text style={styles.lastCatagoryCardText}>{data.name}</Text>
      <TouchableOpacity onPress={active ? () => dispatch(removeCatagory(active[1])) : () => dispatch(chooseCatagory(data.id))}>
        <IconA name={ active ? "star" : "staro"} size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

class SubCatagory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.selectAllLastCatagories = this.selectAllLastCatagories.bind(this);
    this.deSelectAllLastCatagories = this.deSelectAllLastCatagories.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  selectAllLastCatagories() {
    const { lastCatagories, selectedCatagories = [], dispatch, chooseCatagory, removeCatagory } = this.props;
    const arr = [];
    for (var i = 0; i < lastCatagories.length; i++) {
      if (!this.isSelected(lastCatagories[i])) {
        arr.push(lastCatagories[i].id);
      }
    }
    dispatch(chooseCatagory(arr));
  }

  deSelectAllLastCatagories() {
    const arr = [];
    const {
      lastCatagories,
      selectedCatagories = [],
      dispatch,
      removeCatagory,
    } = this.props;
    const catIDs = lastCatagories.map(itm => {
      return itm.id;
    })
    for (var i = 0; i < selectedCatagories.length; i++) {
      if (catIDs.includes(selectedCatagories[i].last_catagory_id)) {
        arr.push(selectedCatagories[i].id);
      }
    }
    dispatch(removeCatagory(arr));
  }

  toggleDropDown() {
    const { dropDown } = this.state;
    this.setState({ dropDown: !dropDown });
  }

  isSelected(itm) {
    const { selectedCatagories } = this.props;
    let result = false;
    for (var i = 0; i < selectedCatagories.length; i++) {
      if (selectedCatagories[i].last_catagory_id === itm.id) {
        result = [true, selectedCatagories[i].id];
      }
    }
    return result;
  }

  renderCards() {
    const {
      lastCatagories,
      selectedCatagories = [],
      dispatch,
      chooseCatagory,
      removeCatagory,
    } = this.props;

    return lastCatagories.map(itm => {
      return (<LastCatagory
        data={itm}
        selectedCatagories={selectedCatagories}
        active={this.isSelected(itm)}
        dispatch={dispatch}
        chooseCatagory={chooseCatagory}
        removeCatagory={removeCatagory}
      />);
    })
  }

  isActive() {
    const { lastCatagories = [], selectedCatagories = [] } = this.props;
    if (lastCatagories.length === 0) {
      return false;
    }

    const catIDs = lastCatagories.map(itm => {
      return itm.id;
    })
    let count = 0;
    for (var i = 0; i < selectedCatagories.length; i++) {
      if (catIDs.includes(selectedCatagories[i].last_catagory_id)) {
        count += 1;
      }
    }
    return lastCatagories.length === count;
  }

  render() {
    const { dropDown } = this.state;
    const {
      name,
      lastCatagories,
      selectedCatagories = [],
      dispatch,
      chooseCatagory,
      removeCatagory,
    } = this.props;
    // const { name = 'Food & Drinks', onDownPress, onStarPress, subCategories=[{name: 'Buy/Sell'}, {name: 'Buy/Sell'}] } = this.props;

    return (
      <View style={styles.subCatagoryCardWrapper}>
        <TouchableOpacity
          style={styles.subCatagoryCard}
          onPress={this.toggleDropDown}
        >
          <Text style={styles.subCatagoryCardText}>{name}</Text>
          <TouchableOpacity onPress={this.isActive() ? this.deSelectAllLastCatagories : this.selectAllLastCatagories}>
            <IconA
              name={this.isActive() ? 'star' : 'staro'}
              size={20}
              color="#FFF"
            />
          </TouchableOpacity>
          <View style={styles.iconDivider} />
          <Icon name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>
        {dropDown && this.renderCards()}
      </View>
    );
  }
}

class CatagoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.selectAllSubCatagories = this.selectAllSubCatagories.bind(this);
    this.deSelectAllSubCatagories = this.deSelectAllSubCatagories.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  selectAllSubCatagories() {
    const { data, selectedCatagories = [], dispatch, chooseCatagory, removeCatagory  } = this.props;
    const selectedIDs = selectedCatagories.map(itm => {
      return itm.last_catagory_id;
    });

    let arr = [];
    for (var i = 0; i < data.sub_catagories.length; i++) {
      for (var j = 0; j < data.sub_catagories[i].last_catagories.length; j++) {
        if (
          !selectedIDs.includes(data.sub_catagories[i].last_catagories[j].id)
        ) {
          arr.push(data.sub_catagories[i].last_catagories[j].id);
        }
      }
    }
    dispatch(chooseCatagory(arr));
  }

  deSelectAllSubCatagories() {
    const { data, selectedCatagories = [], dispatch, removeCatagory  } = this.props;

    let arr = [];
    for (var i = 0; i < data.sub_catagories.length; i++) {
      for (var j = 0; j < data.sub_catagories[i].last_catagories.length; j++) {
        for (var k = 0; k < selectedCatagories.length; k++) {
          if (
            selectedCatagories[k].last_catagory_id ===
            data.sub_catagories[i].last_catagories[j].id
          ) {
            arr.push(selectedCatagories[k].id);
          }
        }
      }
    }
    dispatch(removeCatagory(arr));
  }

  toggleDropDown() {
    const { dropDown } = this.state;
    this.setState({ dropDown: !dropDown });
  }

  isActive() {
    const { data, selectedCatagories = [] } = this.props;
    let lastCount = 0;
    for (var i = 0; i < data.sub_catagories.length; i++) {
      for (var j = 0; j < data.sub_catagories[i].last_catagories.length; j++) {
        lastCount += 1;
      }
    }
    if (lastCount === 0) {
      return false;
    }
    return lastCount === selectedCatagories.length;
  }

  render() {
    const { dropDown } = this.state;
    const { data, selectedCatagories = [], dispatch, chooseCatagory, removeCatagory } = this.props;

    return (
      <View style={styles.catagoryCardWrapper}>
        <TouchableOpacity
          style={styles.catagoryCard}
          onPress={this.toggleDropDown}
        >
          <Text style={styles.catagoryCardText}>{data.name}</Text>
          <TouchableOpacity onPress={this.isActive() ? this.deSelectAllSubCatagories : this.selectAllSubCatagories}>
            <IconA name={this.isActive() ? 'star' : 'staro'} size={20} color="#01A7FF" />
          </TouchableOpacity>
          <View style={styles.iconDivider} />
          <Icon name="chevron-down" size={20} />
        </TouchableOpacity>
        {dropDown &&
          data.sub_catagories.map(itm => {
            return <SubCatagory
              name={itm.name}
              lastCatagories={itm.last_catagories}
              selectedCatagories={selectedCatagories}
              dispatch={dispatch}
              chooseCatagory={chooseCatagory}
              removeCatagory={removeCatagory}
              />;
          })}
      </View>
    );
  }
}

export default CatagoryCard;
