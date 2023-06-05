import axios from "axios";

class ApiBbaServices {
  static getInstance() {
    return new ApiBbaServices();
  }

  postMembership = async (data) => {
    const item = data.monthObject;
    const localId = data.localId;
    try {
      const response = await axios.post(
        `https://bbapp-19158-default-rtdb.firebaseio.com/${localId}.json`,
        {
          email: item.email,
          membershipPeriod: item.memebershipPeriod,
          memberShipActive: true,
          membershipStartDate: item.membershipStartDate,
          membershipActiveTill: item.membershipActiveTill,
          price: 5000,
        }
      );
      return response;
    } catch {
      console.log("error in postMembership");
    }
  };

  updateMembership = async (data) => {
    const localId = data.localId;
    const membershipActiveTill = data.membershipActiveTill;
    const key = data.key;
    // console.log(localId,date,key);
    try {
      const response = await axios.patch(
        `https://bbapp-19158-default-rtdb.firebaseio.com/${localId}/${key}.json`,
        {
          membershipActiveTill: membershipActiveTill,
        }
      );
      return response.data;
    } catch {
      console.log("error in put");
    }
  };
  getBbaData = async (data) => {
    const localId = data;
    console.log(localId)
    const key = data.key;
    try {
      const response = await axios.get(
        `https://bbapp-19158-default-rtdb.firebaseio.com/${localId}.json`
      );
      return response;
    } catch {
      console.log("error in get bba");
    }
  };
}

export const apiBbaServices = ApiBbaServices.getInstance();
