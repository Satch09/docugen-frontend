const reports = [
  {
    label: "Project Name",
    type: "text",
    defaultValue: "Project Name",
    register: "project_name",
    options: { required: true },
  },
  {
    label: "eB Number",
    type: "text",
    defaultValue: "eB Number",
    register: "eb_number",
    options: { required: true },
  },
  {
    label: "Io List",
    type: "checkbox",
    defaultValue: null,
    register: "report:io_list",
  },
  {
    label: "Enclosure Schedule",
    type: "checkbox",
    defaultValue: null,
    register: "report:enclosure_schedule",
  },
  {
    label: "Cable Utilisation",
    type: "checkbox",
    defaultValue: null,
    register: "report:cable_utilisation",
  },
  {
    label: "Project Detail Report",
    type: "checkbox",
    defaultValue: null,
    register: "report:project_detail_report",
  },
  {
    label: "Termination Schedule",
    type: "checkbox",
    defaultValue: null,
    disabled: true,
    register: "report:termination_schedule",
  },
];
export default function handler(req, res) {
  return res.status(200).json(reports);
}
