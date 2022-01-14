import { makeAutoObservable, runInAction } from 'mobx';

export default class UiStore {
  pageLoaded = false;
  prevModal = null;
  activeModal = null;
  modalParams = null;

  constructor() {
    makeAutoObservable(this);

    // this.updateParams(new URLSearchParams(window.location.search));
  }

  // assuming only one modal at given time
  setModal(name, params) {
    const timeoutms = this.prevModal ? 100 : 0;

    setTimeout(() => {
      this.prevModal = this.activeModal;
      this.activeModal = name;
      if (params) {
        this.modalParams = params;
      } else {
        this.modalParams = null;
      }
    }, timeoutms);
  }

  setPageLoaded(v) {
    if (v !== this.pageLoaded) {
      this.pageLoaded = v;
    }
  }

  resetModal() {
    this.prevModal = this.activeModal;
    this.activeModal = null;
    this.modalParams = null;
  }
}
