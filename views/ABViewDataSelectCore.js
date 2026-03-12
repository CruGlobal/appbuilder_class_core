import ABViewWidget from "../../platform/views/ABViewWidget.js";

const ABViewDataSelectPropertyComponentDefaults = {
   dataviewID: null, // uuid of ABDatacollection
};

const ABViewDefaults = {
   key: "data-select", // {string} unique key for this view
   icon: "chevron-circle-down", // {string} fa-[icon] reference for this view
   labelKey: "Data Select", // {string} the multilingual label key for the class label
};

export default class ABViewDataSelectCore extends ABViewWidget {
   constructor(values, application, parent, defaultValues) {
      super(values, application, parent, defaultValues ?? ABViewDefaults);
   }

   static common() {
      return ABViewDefaults;
   }

   static defaultValues() {
      return ABViewDataSelectPropertyComponentDefaults;
   }

   ///
   /// Instance Methods
   ///

   /**
    * @method fromValues()
    *
    * initialze this object with the given set of values.
    * @param {obj} values
    */
   fromValues(values) {
      super.fromValues(values);
   }

   /**
    * @method componentList
    * return the list of components available on this view to display in the editor.
    */
   componentList() {
      return [];
   }
}
