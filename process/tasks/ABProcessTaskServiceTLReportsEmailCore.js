/**
 * ABProcessTaskServiceTLReportsEmailCore
 * A service task that emails every Team Leader the "RC Balances" and
 * "Budget vs. Actual" reports (as PDF attachments) of a fiscal period.
 *
 * The work is done by the custom_reports service
 * (custom_reports.tl-reports-email-all); the server side task only sends it
 * the fiscal period, the same way the Email task hands its work to
 * notification_email.
 */
import ABProcessElement from "../../../platform/process/tasks/ABProcessElement.js";

const TLReportsEmailDefaults = {
   category: null,
   // category: {string} | null
   // if this Element should show up on one of the popup replace menus, then
   // specify one of the categories of elements it should be an option for.
   // Available choices: [ "start", "gateway", "task", "end" ].
   //
   // if it shouldn't show up under the popup menu, then leave this null

   icon: "envelope", // font-awesome icon reference.  (without the 'fa-').  so 'user'  to reference 'fa-user'

   instanceValues: [],
   // instanceValues: {array}
   // a list of values this element tracks as it is operating in a process.

   key: "TLReportsEmail",
   // key: {string}
   // unique key to reference this specific Task

   settings: ["processFPValue", "objectFP", "sendTo", "from"],
   // settings: {array}
   // a list of internal setting values this Element tracks. These are the
   // values set by the platform .propertiesStash()
   //    processFPValue: the process data key of the Fiscal Period (row uuid)
   //    objectFP: the Fiscal Period object
   //    sendTo: (optional) send every email to this address instead (testing)
   //    from: (optional) the From address
};

export default class TLReportsEmailCore extends ABProcessElement {
   constructor(attributes, process, AB) {
      attributes.type =
         attributes.type || "process.task.service.tlReportsEmail";
      super(attributes, process, AB, TLReportsEmailDefaults);
   }

   // return the default values for this DataField
   static defaults() {
      return TLReportsEmailDefaults;
   }

   static DiagramReplace() {
      return null;
   }
}
