const reports = [
  {
    label: "Junction Boxes",
    type: "number",
    defaultValue: 0,
    register: "generate:junction_boxes",
    // options: { required: true },
  },
  {
    label: "Junction Box prefix",
    type: "text",
    defaultValue: "FJB_",
    register: "generate:jb_prefix",
    // options: { required: true },
  },
  {
    label: "Instruments",
    type: "number",
    defaultValue: 10,
    register: "generate:instruments",
    // options: { required: true },
  },

  // {
  //   label: "Io List",
  //   type: "checkbox",
  //   defaultValue: null,
  //   register: "report:io_list",
  // },
  // {
  //   label: "Enclosure Schedule",
  //   type: "checkbox",
  //   defaultValue: null,
  //   register: "report:enclosure_schedule",
  // },
  // {
  //   label: "Cable Utilisation",
  //   type: "checkbox",
  //   defaultValue: null,
  //   register: "report:cable_utilisation",
  // },
  // {
  //   label: "Project Detail Report",
  //   type: "checkbox",
  //   defaultValue: null,
  //   register: "report:project_detail_report",
  // },
  // {
  //   label: "Termination Schedule",
  //   type: "checkbox",
  //   defaultValue: null,
  //   disabled: true,
  //   register: "report:termination_schedule",
  // },
];
export default function handler(req, res) {
  return res.status(200).json(reports);
}
