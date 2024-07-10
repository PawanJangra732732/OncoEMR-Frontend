import { DataTypes } from "sequelize";
import sequelize from "@/lib/db";

const FormSubmission = sequelize.define("FormSubmission", {
  physician: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middle_name: DataTypes.STRING,
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  suffix: DataTypes.STRING,
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line_1: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insurance_company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insurance_member_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  effective_date_of_insurance: DataTypes.DATE,
  preferred_contact_method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  referring_provider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maiden_name: DataTypes.STRING,
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  birth_time: DataTypes.TIME,
  city_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  have_siblings: DataTypes.BOOLEAN,
  ssn_number: DataTypes.STRING,
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexual_orientation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ethnicity: DataTypes.STRING,
  affiliated_tribe: DataTypes.STRING,
  enrolled_as_tribe_member: DataTypes.BOOLEAN,
  marital_status: DataTypes.STRING,
  salutation: DataTypes.STRING,
  employer: DataTypes.STRING,
  preferred_language: DataTypes.STRING,
  preferred_clinic: DataTypes.STRING,
  status: DataTypes.STRING,
  test_patient: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default FormSubmission;
