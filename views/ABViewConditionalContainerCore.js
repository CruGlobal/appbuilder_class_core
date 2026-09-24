import ABViewContainer from "../../platform/views/ABViewContainer.js";

const ABViewPropertyDefaults = {
   dataviewID: null,
   filterConditions: {},
};

const ABViewDefaults = {
   key: "conditionalcontainer", // unique key identifier for this ABView
   icon: "shield", // icon reference: (without 'fa-' )
   labelKey: "Conditional Container", // {string} the multilingual label key for the class label
};

export default class ABViewConditionalContainerCore extends ABViewContainer {
   constructor(values, application, parent, defaultValues) {
      super(values, application, parent, defaultValues || ABViewDefaults);

      const L = (...params) => this.AB.Multilingual.label(...params);

      // Plugin view containers are not instanceof the platform ABViewContainer.
      // Clearing _views here dropped the saved If/Else panels and replaced
      // them with two id-less containers that share one webix id.
      const containerPanels = this.views((v) => v?.key === "viewcontainer");
      if (containerPanels.length < 2) {
         const hasIf = this.views((v) => v?.name === "If").length > 0;
         const hasElse = this.views((v) => v?.name === "Else").length > 0;

         if (!hasIf) {
            const ifPanel = application.viewNew(
               {
                  key: ABViewContainer.common().key,
                  label: L("If"),
                  name: "If",
                  settings: {
                     removable: false,
                  },
               },
               this,
            );

            this._views.push(ifPanel);
         }

         if (!hasElse) {
            const elsePanel = application.viewNew(
               {
                  key: ABViewContainer.common().key,
                  label: L("Else"),
                  name: "Else",
                  settings: {
                     removable: false,
                  },
               },
               this,
            );

            this._views.push(elsePanel);
         }
      }
   }

   static common() {
      return ABViewDefaults;
   }

   static defaultValues() {
      return ABViewPropertyDefaults;
   }

   /**
    * @method componentList
    * return the list of components available on this view to display in the editor.
    * For a Conditional Container, we don't allow any other items to be placed on it.
    */
   componentList() {
      return [];
   }
}
