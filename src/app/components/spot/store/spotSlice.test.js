import { spotData } from "../../../../_data/data";
import { toggleSpotDetailsModal, resetState, getSpot } from "./spotSlice";
import store from "../../../store";

afterEach(() => {
  store.dispatch(resetState());
});

let state = store.getState().spot;

describe("spotSlice tests", () => {
  describe("toggleSpotDetailsModal", () => {
    it("should create an action to toggle the spotDetailsModal", () => {
      const expectedAction = {
        type: "spot/toggleSpotDetailsModal"
      };

      expect(toggleSpotDetailsModal()).toEqual(expectedAction);
    });

    it("should initialize with the modal state false", () => {
      expect(state.showSpotDetailsModal).toBeFalsy();
    });

    it("should toggle the modal state", () => {
      //toggle open
      store.dispatch(toggleSpotDetailsModal());
      const toggledModalOpen = store.getState().spot.showSpotDetailsModal;
      expect(toggledModalOpen).toBeTruthy();
      expect(toggledModalOpen).toBe(!state.showSpotDetailsModal);

      //toggle closed
      store.dispatch(toggleSpotDetailsModal());
      const toggledModalClosed = store.getState().spot.showSpotDetailsModal;
      expect(toggledModalClosed).toBeFalsy();
      expect(toggledModalClosed).toBe(!toggledModalOpen);
    });
  });

  describe("getSpot async action", () => {
    it("should create an action that fetches a spot", async () => {
      const expectedActionTypePrefix = "spot/getSpot";

      expect(getSpot.typePrefix).toEqual(expectedActionTypePrefix);
    });

    it("should update spot state to hasError when getSpot promise is rejected", async () => {
      const action = {
        type: "spot/getSpot/rejected",
        payload: null
      };

      await store.dispatch(action);

      state = store.getState().spot;

      expect(state.hasError).toBeTruthy();
    });

    it("should update spot state to loading when getSpot promise is pending", async () => {
      const action = {
        type: "spot/getSpot/pending",
        payload: spotData.selected
      };

      await store.dispatch(action);

      state = store.getState().spot;

      expect(state.isLoading).toBeTruthy();
    });

    it("should update the spot.selected state when promise is fulfilled", async () => {
      await store.dispatch(getSpot(spotData.selected.spotId));

      state = store.getState().spot;

      expect(state.selected).toEqual(spotData.selected);
    });
  });
});
