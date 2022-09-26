const { commisionRate } = require('../constants');

module.exports = class CommisionService {
  getCommision(amount) {
    let commision, rate;
    if (amount >= 1 && amount <= 400) {
      rate = commisionRate[1];
      commision = (amount * commisionRate[1]) / 100;
    }

    if (amount >= 401 && amount <= 800) {
      rate = commisionRate[401];
      commision = (amount * commisionRate[401]) / 100;
    }

    if (amount >= 801 && amount <= 1200) {
      rate = commisionRate[801];
      commision = (amount * commisionRate[801]) / 100;
    }

    if (amount >= 1201 && amount <= 9000) {
      rate = commisionRate[1201];
      commision = (amount * commisionRate[1201]) / 100;
    }

    if (amount >= 9001 && amount <= 15000) {
      rate = commisionRate[9001];
      commision = (amount * commisionRate[9001]) / 100;
    }

    const remaining = amount - commision;
    const result = `Your commision rate is ${rate}% you will get $${commision} and remaining amount is $${remaining}.`;

    return result;
  }
};
