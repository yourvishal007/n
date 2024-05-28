import Color from "@/components/ColorPicker/ColorPicker";

export const finalSpaceCharacters = [
  {
    id: "welcome",
    screenName: "Welcome Screen",
    thumb: "/images/welcome.png",
    isDraggable: true,
    isMandatory: true,
    description: "Introduction to the lending service and process overview.",
  },
  {
    id: "personal_info",
    screenName: "Personal Information Screen",
    thumb: "/images/personal_info.png",
    isDraggable: true,
    isMandatory: true,
    description: "Collect personal details and verify identity.",
  },
  {
    id: "employment_income",
    screenName: "Employment and Income Information Screen",
    thumb: "/images/employment_income.png",
    isDraggable: false,
    isMandatory: true,
    description:
      "Details about employment status, income sources, and employer.",
  },
  {
    id: "credit_info",
    screenName: "Credit Information Screen",
    thumb: "/images/credit_info.png",
    isDraggable: false,
    isMandatory: true,
    description: "Consent for credit check and display of credit score.",
  },
  {
    id: "loan_details",
    screenName: "Loan Details Screen",
    thumb: "/images/loan_details.png",
    isDraggable: false,
    isMandatory: true,
    description: "Select loan amount, term, and view repayment details.",
  },
  {
    id: "loan_purpose",
    screenName: "Purpose of Loan Screen",
    thumb: "/images/loan_purpose.png",
    isDraggable: true,
    isMandatory: true,
    description: "Specify the reason for the loan.",
  },
  {
    id: "collateral_info",
    screenName: "Collateral Information Screen",
    thumb: "/images/collateral_info.png",
    isDraggable: true,
    isMandatory: true,
    description: "Provide details and valuation of collateral.",
  },
  {
    id: "financial_obligations",
    screenName: "Financial Obligations Screen",
    thumb: "/images/financial_obligations.png",
    isDraggable: false,
    isMandatory: true,
    description: "Disclose existing debts and monthly expenses.",
  },
  {
    id: "terms_conditions",
    screenName: "Terms and Conditions Screen",
    thumb: "/images/terms_conditions.png",
    isDraggable: false,
    isMandatory: true,
    description: "Detailed terms of the loan agreement.",
  },
  {
    id: "document_upload",
    screenName: "Document Upload Screen",
    thumb: "/images/document_upload.png",
    isDraggable: false,
    isMandatory: true,
    description: "Upload required documents for verification.",
  },
  {
    id: "review_confirmation",
    screenName: "Review and Confirmation Screen",
    thumb: "/images/review_confirmation.png",
    isDraggable: true,
    isMandatory: true,
    description: "Summary and confirmation of provided information.",
  },
  {
    id: "digital_signature",
    screenName: "Digital Signature Screen",
    thumb: "/images/digital_signature.png",
    isDraggable: true,
    isMandatory: true,
    description: "Electronically sign the loan agreement.",
  },
  {
    id: "verification_approval",
    screenName: "Verification and Approval Screen",
    thumb: "/images/verification_approval.png",
    isDraggable: true,
    isMandatory: true,
    description: "Status updates and additional information requests.",
  },
  {
    id: "disbursement_info",
    screenName: "Disbursement Information Screen",
    thumb: "/images/disbursement_info.png",
    isDraggable: true,
    isMandatory: true,
    description: "Details on fund disbursement and transfer.",
  },
  {
    id: "customer_support",
    screenName: "Customer Support Screen",
    thumb: "/images/customer_support.png",
    isDraggable: true,
    isMandatory: true,
    description: "Contact support, FAQs, and help resources.",
  },
];

export const idProofs = [
  {
    id: "1",
    header: "Input Fields",
    draggable: true,
    columns: [
      {
        id: "text",
        label: "Text Input",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "voter",
        label: "Voter ID Card",
        placeholder: "Enter your Voter ID",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        validation: "",
        validationMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        dependableField: [
          {
            id: "aadhaarVoter",
            label: "Aadhaar  Card",
            parentId: "voter",
            placeholder: "Enter text here",
            maxlength: 50,
            maxLengthMessage: "",
            minlength: 3,
            required: true,
            minLengthMessage: "",
            color: "",
            disabled: false,
            readonly: false,
            value: "",
            validation: "",
            validationMessage: "",
          },
          {
            id: "panVoter",
            label: "PAN Voter Card",
            parentId: "voter",
            placeholder: "Enter text here",
            maxlength: 50,
            maxLengthMessage: "",
            minlength: 3,
            required: true,
            minLengthMessage: "",
            color: "",
            disabled: false,
            readonly: false,
            value: "",
            validation: "",
            validationMessage: "",
          },
        ],
      },
      {
        id: "number",
        label: "Number Input",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "radio",
        label: "Radio Button",
        required: true,
        disabled: false,
        readonly: false,
      },
      {
        id: "checkbox",
        label: "Checkbox",
        required: true,
        disabled: false,
        readonly: false,
      },
      {
        id: "date",
        label: "Date Input",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "select",
        label: "Select Dropdown",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "textarea",
        label: "Textarea",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "range",
        label: "Range Input",
        placeholder: "Enter text here",
        maxlength: 50,
        maxLengthMessage: "",
        minlength: 3,
        required: true,
        minLengthMessage: "",
        color: "",
        disabled: false,
        readonly: false,
        value: "",
        validation: "",
        validationMessage: "",
      },
      {
        id: "header",
        label: "Header",
        color: "",
      },
      {
        id: "button",
        label: "Save",
        color: "",
      },
      {
        id: "button",
        label: "Back",
        color: "",
      },
    ],
  },
  {
    id: "2",
    header: "AlignMent",
    draggable: false,
    columns: [
      {
        id: "One_In_Row",
        label: "One In Row",
      },
      {
        id: "two_in_Row",
        label: "Two In Row",
      },
    ],
  },
];

export const d = [
  {
    value: "firstname",
    label: "First Name",
    type: "text",
  },
  {
    value: "lastname",
    label: "Last Name",
    type: "text",
  },
  {
    value: "middlename",
    label: "Middle Name",
    type: "text",
  },
  {
    value: "fathername",
    label: "Father's Name",
    type: "text",
  },
  {
    value: "mothername",
    label: "Mother's Name",
    type: "text",
  },
  {
    value: "dateofbirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    value: "streetaddress",
    label: "Street Address",
    type: "text",
  },
  {
    value: "city",
    label: "City",
    type: "text",
  },
  {
    value: "state",
    label: "State",
    type: "select",
    options: [
      { key: "AP", value: "Andhra Pradesh" },
      { key: "AR", value: "Arunachal Pradesh" },
      { key: "AS", value: "Assam" },
      { key: "BR", value: "Bihar" },
      { key: "CG", value: "Chhattisgarh" },
      { key: "GA", value: "Goa" },
      { key: "GJ", value: "Gujarat" },
      { key: "HR", value: "Haryana" },
      { key: "HP", value: "Himachal Pradesh" },
      { key: "JK", value: "Jammu and Kashmir" },
      { key: "JH", value: "Jharkhand" },
      { key: "KA", value: "Karnataka" },
      { key: "KL", value: "Kerala" },
      { key: "MP", value: "Madhya Pradesh" },
      { key: "MH", value: "Maharashtra" },
      { key: "MN", value: "Manipur" },
      { key: "ML", value: "Meghalaya" },
      { key: "MZ", value: "Mizoram" },
      { key: "NL", value: "Nagaland" },
      { key: "OD", value: "Odisha" },
      { key: "PB", value: "Punjab" },
      { key: "RJ", value: "Rajasthan" },
      { key: "SK", value: "Sikkim" },
      { key: "TN", value: "Tamil Nadu" },
      { key: "TS", value: "Telangana" },
      { key: "TR", value: "Tripura" },
      { key: "UK", value: "Uttarakhand" },
      { key: "UP", value: "Uttar Pradesh" },
      { key: "WB", value: "West Bengal" },
    ],
  },
  {
    value: "postalcode",
    label: "Postal Code",
    type: "text",
  },
  {
    value: "country",
    label: "Country",
    type: "text",
  },
  {
    value: "idnumber",
    label: "ID Number",
    type: "text",
  },
  {
    value: "mobilenumber",
    label: "Mobile Number",
    type: "text",
  },
  {
    value: "secondarymobilenumber",
    label: "Secondary Mobile Number",
    type: "text",
  },
  {
    value: "contactnumber",
    label: "Contact Number",
    type: "text",
  },
  {
    value: "email",
    label: "Email",
    type: "email",
  },
  {
    value: "nationality",
    label: "Nationality",
    type: "text",
  },
  {
    value: "gender",
    label: "Gender",
    type: "select",
    options: [
      { key: "F", value: "Female" },
      { key: "M", value: "Male" },
      { key: "T", value: "Transgender" },
    ],
  },
  {
    value: "maritalstatus",
    label: "Marital Status",
    type: "select",
    options: [
      { key: "S", value: "Single" },
      { key: "M", value: "Married" },
      { key: "D", value: "Divorced" },
      { key: "W", value: "Widowed" },
    ],
  },
  {
    value: "husbandname",
    label: "Husband's Name",
    type: "text",
  },
  {
    value: "nomineename",
    label: "Nominee Name",
    type: "text",
  },
  {
    value: "nominee_relationship",
    label: "Nominee Relationship",
    type: "text",
  },
  {
    value: "coapplicant_firstname",
    label: "Co-Applicant First Name",
    type: "text",
  },
  {
    value: "coapplicant_lastname",
    label: "Co-Applicant Last Name",
    type: "text",
  },
  {
    value: "coapplicant_mobilenumber",
    label: "Co-Applicant Mobile Number",
    type: "text",
  },
  {
    value: "coapplicant_email",
    label: "Co-Applicant Email",
    type: "text",
  },
];
export const drawerConstant = [
  {
    id: "color",
    type: "color",
    label: "Select Color",
    value: "#5e72e4",
  },
  {
    id: "required",
    type: "checkbox",
    label: "Field is required",
    value: "required",
  },
  {
    id: "placeholder",
    type: "text",
    label: "Change Placeholder",
    placeholder: "Do you want to change placeholder",
    value: "placeholder",
  },
  { id: "label", type: "select", label: "Change the label", value: "Label",options:d },
  {
    id: "maxLength",
    type: "number",
    label: "Maximum length",
    value: "0",
  },
  {
    id: "maxLengthMessage",
    type: "text",
    label: "MaxLength Message",
    value: "0",
  },
  {
    id: "minLength",
    type: "number",
    label: "Minimum length",
    value: "0",
  },
  {
    id: "minLengthMessage",
    type: "text",
    label: "Minlength Message",
    value: "0",
  },
];

