"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { referring_providers } from "@/app/data/referring-providers";
import { State, City } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

import React, { useState } from "react";
import { BACKEND_URL } from "@/lib/env";
import { Combobox } from "./combobox";

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
  city: z.string(),
  state: z.string().min(1, { message: "required" }),
  insurance_company: z
    .string()
    .min(2, "please provide a valid insurance company name"),
  insurance_member_id: z
    .string()
    .min(2, "please provide a valid insurance member id"),
  effective_date_of_insurance: z.string().date().optional(),
  preferred_contact_method: z.string(),
  referring_provider: z.string().min(1, "please select a referring provider"),
  date_of_birth: z.string().date(),
  sex: z.string().min(2, "field is required"),
});

const all_US_States = State.getStatesOfCountry("US");

export default function CustomForm() {
  const [cityOptions, setCityOptions] = useState(["no state selected"]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      physician: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile_number: "",
      preferred_contact_method: "",
      date_of_birth: "",
      sex: "",
      referring_provider: "",
      address_line_1: "",
      city: "",
      state: "",
      insurance_company: "",
      insurance_member_id: "",
      effective_date_of_insurance: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(BACKEND_URL + "/api/patients/", values);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border-black-100 md:border-[1px] w-full max-w-5xl mx-auto p-4 md:p-6 shadow-md dark:shadow-emerald-50 dark:shadow-sm rounded space-y-8 text-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4">
          <FormField
            control={form.control}
            name="physician"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Physician</FormLabel>
                <div className="w-full">
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
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referring_provider"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Referring Provider</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Combobox
                      options={referring_providers}
                      value={field.value}
                      setValue={field.onChange}
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">First Name*</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="first name" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="middle_name"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Middle Name</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="middle name" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Last Name*</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="last name" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Mobile Number</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Mobile Number" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Email</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="email" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferred_contact_method"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">
                  Preferred Contact Method*
                </FormLabel>
                <div className="w-full">
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
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Birth Sex*</FormLabel>
                <div className="w-full">
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
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Date Of Birth*</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="Date of Birth" type="date" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">State</FormLabel>
                <div className="w-full">
                  <FormControl>
                    {/* <Input placeholder="State" type="text" {...field} /> */}
                    <Combobox
                      options={all_US_States.map((x) => x.name)}
                      setValue={(x: any) => {
                        field.onChange(x);
                        const ind = all_US_States.findIndex(
                          (_x) => _x.name == x
                        );
                        const _iso_code = all_US_States[ind].isoCode;
                        //@ts-ignore
                        setCityOptions(City.getCitiesOfState("US", _iso_code));
                      }}
                      value={field.value}
                      searchEmptyText="No State found"
                      searchText="Search Your State"
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">City</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input placeholder="City" type="text" {...field} />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">City</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Combobox
                      //@ts-ignore
                      options={cityOptions.map((x) => x.name)}
                      setValue={field.onChange}
                      value={field.value}
                      searchEmptyText={
                        cityOptions[0] != "no state selected"
                          ? "No City found"
                          : "Please select State first"
                      }
                      searchText="Search Your City"
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address_line_1"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Address Line 1</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Textarea
                      rows={1}
                      placeholder="your full Address here..."
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="insurance_company"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Insurance Company</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Insurance Company full name"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="insurance_member_id"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">Insurance Member ID</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Insurance Member ID"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="effective_date_of_insurance"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="w-32">
                  Effective Date of Insurance
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Effective Date of Insurance"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-2 block">
                    <FormMessage className="mt-1" />
                  </div>
                </div>
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
