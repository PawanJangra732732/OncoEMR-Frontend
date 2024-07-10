"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { lang } from "@/app/dummy-data/lang";
import { Textarea } from "@/components/ui/textarea";
import { CheckboxWithText } from "@/components/check-box";
import axios from "axios";

// Don't Remove
// Here are the Main Filed which are mentioned in our Contract
// Digital form to include the below entry fields:
//  Name ✔️
//  Address ✔️
//  Date of birth ✔️
//  Gender ✔️
//  Mobile phone number ✔️
//  Email address ✔️
//  Option to indicate preferred contact method ✔️
//  Referring provider ✔️
//  Insurance company ✔️
//  Insurance member ID ✔️
//  Effective date of insurance ✔️

const formSchema = z.object({
  physician: z.string().min(2, { message: "please select your physician" }),
  first_name: z
    .string()
    .min(1, { message: "Please enter a valid first Name" })
    .max(20),
  middle_name: z.string().optional(),
  last_name: z
    .string()
    .min(2, { message: "Please enter a valid last Name" })
    .max(20),
  suffix: z.string().optional(),
  mobile_number: z.string().refine(
    (val) => {
      const mobileNumberRegex = /^\+?[1-9]\d{1,14}$/; // regex for international format
      return mobileNumberRegex.test(val);
    },
    {
      message: "Invalid mobile number format.",
    }
  ),
  email: z.string().email(),
  address_line_1: z.string().min(10, "please provide your full address"),
  city: z.string().min(1, { message: "required" }),
  state: z.string().min(1, { message: "required" }),
  country: z.string().min(1, { message: "required" }),
  insurance_company: z
    .string()
    .min(2, "please provide a valid insurance company name"),
  insurance_member_id: z
    .string()
    .min(2, "please provide a valid insurance member id"),
  effective_date_of_insurance: z.string().date().optional(),
  preferred_contact_method: z.string(),
  referring_provider: z.string(),
  maiden_name: z.string().optional(),
  date_of_birth: z.string().date(),
  birth_time: z.string().time().optional(),
  city_of_birth: z.string().min(2).max(20),
  state_of_birth: z.string().min(2).max(20),
  country_of_birth: z.string().min(2).max(20),
  // mothers_maiden_name: z.string().min(2).max(20).optional(),
  have_siblings: z.string().optional(),
  // record_number: z.string(),
  ssn_number: z.string().optional(),
  sex: z.string().min(2, "field is required"),
  sexual_orientation: z.string(),
  ethnicity: z.string().optional(),
  affiliated_tribe: z.string().optional(),
  enrolled_as_tribe_member: z.string().optional(),
  marital_status: z.string().optional(),
  salutation: z.string().optional(),
  employer: z.string().optional(),
  preferred_language: z.string().optional(),
  preferred_clinic: z.string().optional(),
  status: z.string().optional(),
  // date_of_death: z.string().optional(),
  // cause_of_death: z.string().optional(),
  // living_will: z.string().optional(),
  // durable_power_of_attorney: z.string().optional(),
  // dnr: z.string().optional(),
  // last_verified: z.string().date().optional(),
  // benefit_status: z.string().optional(),
  test_patient: z.boolean().default(false).optional(),
  // photo: z
  //   .instanceof(File)
  //   .refine(
  //     (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
  //     {
  //       message:
  //         "Invalid file type. Only JPEG, PNG, and GIF images are allowed.",
  //     }
  //   ),
});

export default function CustomForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      physician: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile_number: "",
      preferred_contact_method: "",
      suffix: "",
      maiden_name: "",
      date_of_birth: "",
      city_of_birth: "",
      state_of_birth: "",
      country_of_birth: "",
      // mothers_maiden_name: "",
      sex: "",
      sexual_orientation: "",
      ethnicity: "",
      affiliated_tribe: "",
      enrolled_as_tribe_member: "",
      marital_status: "",
      salutation: "",
      employer: "",
      preferred_language: "",
      preferred_clinic: "",
      // date_of_death: "",
      // cause_of_death: "",
      // living_will: "",
      // durable_power_of_attorney: "",
      // dnr: "",
      // last_verified: "",
      // benefit_status: "",
      referring_provider: "",
      address_line_1: "",
      city: "",
      state: "",
      country: "",
      insurance_company: "",
      insurance_member_id: "",
      effective_date_of_insurance: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await axios.post("/api/form", values);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-full sm:max-w-lg md:max-w-3xl mx-auto p-6 shadow-md rounded space-y-8 text-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="physician"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Physician</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Physician" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your Physician</SelectLabel>
                        <SelectItem value="Ali, NP, Jessica Fay">
                          Ali, NP, Jessica Fay
                        </SelectItem>
                        <SelectItem value="Gelfand, MD, Robert">
                          Gelfand, MD, Robert
                        </SelectItem>
                        <SelectItem value="Ghuman, MD, Damanjit">
                          Ghuman, MD, Damanjit
                        </SelectItem>
                        <SelectItem value="Kramer, MD, Rachel">
                          Kramer, MD, Rachel
                        </SelectItem>
                        <SelectItem value="Livescu, NP, Nicole">
                          Livescu, NP, Nicole
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="first name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middle_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input placeholder="middle name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="last name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="suffix"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suffix</FormLabel>
                <FormControl>
                  <Input placeholder="Suffix" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile Number" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_contact_method"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method *</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select any one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          Select your Preferred Contact Method
                        </SelectLabel>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maiden_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maiden Name</FormLabel>
                <FormControl>
                  <Input placeholder="Maiden Name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date Of Birth *</FormLabel>
                <FormControl>
                  <Input placeholder="Date of Birth" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birth_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Time</FormLabel>
                <FormControl>
                  <Input placeholder="Birth Time" type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address_line_1"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Textarea
                    rows={1}
                    placeholder="your full Address here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City of Birth" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="State of Birth"
                      type="text"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Country of Birth"
                      type="text"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="insurance_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insurance Company</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Insurance Company full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="insurance_member_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insurance Member ID</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Insurance Member ID"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="effective_date_of_insurance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Effective Date of Insurance</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Effective Date of Insurance"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referring_provider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referring Provider</FormLabel>
                <FormControl>
                  <Input
                    placeholder="referring provider"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4 col-span-1 md:col-span-2 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
            Place of Birth
          </div>

          <FormField
            control={form.control}
            name="city_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City of Birth" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="State of Birth"
                      type="text"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country_of_birth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Country of Birth"
                      type="text"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-1 md:col-span-2 mt-2"></div>

          {/* <FormField
            control={form.control}
            name="mothers_maiden_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mother&apos;s Maiden Name</FormLabel>
                <FormControl>
                  <>
                    <Input
                      placeholder="Mother's Maiden Name"
                      type="text"
                      {...field}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="have_siblings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Have Siblings</FormLabel>
                <FormControl>
                  <>
                    <RadioGroup defaultValue="option-one" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="option-one" />
                        <Label htmlFor="option-one">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="option-two" />
                        <Label htmlFor="option-two">No</Label>
                      </div>
                    </RadioGroup>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="record_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Record Number *</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 179042" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="ssn_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SSN</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 179042" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Sex *</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Birth Sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your Birth Sex</SelectLabel>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer Not to Say
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <Input placeholder="ex. 179042" type="text" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sexual_orientation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexual Orientation</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Sexual Orientation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          Select your Sexual Orientation
                        </SelectLabel>
                        <SelectItem value="Lesbian, gay or homosexual">
                          Lesbian, gay or homosexual
                        </SelectItem>
                        <SelectItem value="Straight or heterosexual">
                          Straight or heterosexual
                        </SelectItem>
                        <SelectItem value="Bisexual">Bisexual</SelectItem>
                        <SelectItem value="Something else">
                          Something else
                        </SelectItem>
                        <SelectItem value="Don't know">Don't know</SelectItem>
                        <SelectItem value="Choose not to disclose">
                          Choose not to disclose
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ethnicity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ethnicity</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Ethnicity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your Ethnicity</SelectLabel>
                        <SelectItem value="Hispanic or Latino">
                          Hispanic or Latino
                        </SelectItem>
                        <SelectItem value="Not Hispanic or Latino">
                          Not Hispanic or Latino
                        </SelectItem>
                        <SelectItem value="Choose not to disclose">
                          Choose not to disclose
                        </SelectItem>
                        <SelectItem value="Unknown">Unknown</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="affiliated_tribe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Affiliated Tribe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Affiliated Tribe"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="enrolled_as_tribe_member"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enrolled as Tribe Member</FormLabel>
                <FormControl>
                  <>
                    <RadioGroup defaultValue="option-one" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="option-one" />
                        <Label htmlFor="option-one">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="option-two" />
                        <Label htmlFor="option-two">No</Label>
                      </div>
                    </RadioGroup>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marital_status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marital Status</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Marital Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your Marital Status</SelectLabel>
                        <SelectItem value="Annulled">Annulled</SelectItem>
                        <SelectItem value="Divorced">Divorced</SelectItem>
                        <SelectItem value="Interlocutory">
                          Interlocutory
                        </SelectItem>
                        <SelectItem value="Legally Separated">
                          Legally Separated
                        </SelectItem>
                        <SelectItem value="Married">Married</SelectItem>
                        <SelectItem value="Never Married">
                          Never Married
                        </SelectItem>
                        <SelectItem value="Domestic Partner">
                          Domestic Partner
                        </SelectItem>
                        <SelectItem value="Widowed">Widowed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salutation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salutation</FormLabel>
                <FormControl>
                  <Input placeholder="Salutation" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employer</FormLabel>
                <FormControl>
                  <Input placeholder="Employer" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="Occupation" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <FormControl>
                  <Input placeholder="Industry" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="occupation_start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occupation_end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* Preferred Language */}
          <FormField
            control={form.control}
            name="preferred_language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Language</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Preferred Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Preferred Language</SelectLabel>
                        {lang.map(({ groupId, languageText }, i) => (
                          <SelectItem
                            key={i + "_" + groupId}
                            value={languageText}
                          >
                            {languageText}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_clinic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Clinic</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Preferred Clinic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your Preferred Clinic</SelectLabel>
                        <SelectItem value="American Infusion Center">
                          American Infusion Center
                        </SelectItem>
                        <SelectItem value="New York">New York</SelectItem>
                        <SelectItem value="Queens">Queens</SelectItem>
                        <SelectItem value="ZtestLos Altos Office">
                          ZtestLos Altos Office
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select your status</SelectLabel>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Deceased">Deceased</SelectItem>
                        <SelectItem value="Deceased -  Pending Estate">
                          Deceased - Pending Estate
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="date_of_death"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date Of Death</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* <FormField
            control={form.control}
            name="cause_of_death"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Cause Of Death</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Cause of Death" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* <div className="col-span-1 md:col-span-2 flex flex-col gap-y-5">
            <div className="pt-2 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Advance Directives
            </div> */}

          {/* <FormField
              control={form.control}
              name="living_will"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Living Will</FormLabel>
                  <FormControl>
                    <>
                      <RadioGroup
                        defaultValue="option-one"
                        className="flex gap-5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="option-one" />
                          <Label htmlFor="option-one">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="option-two" />
                          <Label htmlFor="option-two">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="option-two" />
                          <Label htmlFor="option-two">Unknown</Label>
                        </div>
                      </RadioGroup>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          {/* <FormField
              control={form.control}
              name="durable_power_of_attorney"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Durable Power of Attorney</FormLabel>
                  <FormControl>
                    <>
                      <RadioGroup
                        defaultValue="option-one"
                        className="flex gap-5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="option-one" />
                          <Label htmlFor="option-one">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="option-two" />
                          <Label htmlFor="option-two">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="option-two" />
                          <Label htmlFor="option-two">Unknown</Label>
                        </div>
                      </RadioGroup>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          {/* <FormField
              control={form.control}
              name="dnr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DNR</FormLabel>
                  <FormControl>
                    <>
                      <RadioGroup
                        defaultValue="option-one"
                        className="flex gap-5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="option-one" />
                          <Label htmlFor="option-one">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="option-two" />
                          <Label htmlFor="option-two">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="option-two" />
                          <Label htmlFor="option-two">Unknown</Label>
                        </div>
                      </RadioGroup>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

          {/* <FormField
              control={form.control}
              name="last_verified"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Verified</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          {/* </div> */}

          <FormField
            control={form.control}
            name="benefit_status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Benefit Status</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo</FormLabel>
                <FormControl>
                  <Input type="file" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="test_patient"
            render={({ field }) => (
              <FormItem className="flex mt-5 col-span-1 md:col-span-2">
                <FormControl className="h-full flex items-center content-center">
                  <CheckboxWithText
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    text="Test Patient"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
