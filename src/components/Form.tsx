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

const formSchema = z.object({
  first_name: z.string().min(2).max(20),
  middle_name: z.string().min(2).max(20),
  last_name: z.string().min(2).max(20),
  suffix: z.string().min(2).max(20),
  maiden_name: z.string().min(2).max(20),
  date_of_birth: z.string().date(),
  birth_time: z.string().time(),
  city_of_birth: z.string().min(2).max(20),
  state_of_birth: z.string().min(2).max(20),
  country_of_birth: z.string().min(2).max(20),
  mothers_maiden_name: z.string().min(2).max(20),
  have_siblings: z.string(),
  record_number: z.string(),
  ssn_number: z.string(),
});

export default function CustomForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      suffix: "",
      maiden_name: "",
      date_of_birth: "",
      city_of_birth: "",
      state_of_birth: "",
      country_of_birth: "",
      mothers_maiden_name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="max-w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-fit mx-auto p-6 shadow-md rounded space-y-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Physician Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="space-y-2">
              <div className="py-4 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Place of Birth
              </div>
              <FormField
                control={form.control}
                name="city_of_birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="City of Birth"
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
            </div>

            <FormField
              control={form.control}
              name="mothers_maiden_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's Maiden Name</FormLabel>
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
            />

            {/* <div>
            <label className="block text-gray-700">Other names</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              Add another name
            </button>
          </div> */}

            <FormField
              control={form.control}
              name="have_siblings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Have Siblings</FormLabel>
                  <FormControl>
                    <>
                      <RadioGroup defaultValue="option-one" className="">
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
            />
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

            <div>
              <label className="block text-gray-700">Birth Sex *</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Gender Identity</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="">None selected</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Sexual Orientation</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="">None selected</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Ethnicity</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="hispanic">Hispanic or Latino</option>
                <option value="not-hispanic">Not Hispanic or Latino</option>
                <option value="not-disclose">Choose not to disclose</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Affiliated Tribe</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="">None selected</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                Enrolled as Tribe Member
              </label>
              <div className="mt-1">
                <input
                  type="radio"
                  name="tribe_member"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
                <input
                  type="radio"
                  name="tribe_member"
                  value="no"
                  className="ml-4 mr-2"
                />{" "}
                No
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Marital Status</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Salutation</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Employer</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder="Enter a few characters to filter the list"
              />
            </div>
            <div>
              <label className="block text-gray-700">Occupation</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Industry</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Occupation date</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">to</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Pref Language</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="english">English</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Pref Clinic</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Status</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option value="active">Active</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Date Of Death</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Cause Of Death</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Advance Directives</label>
              <div className="mt-1">
                <label className="block">Living Will:</label>
                <input
                  type="radio"
                  name="living_will"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
                <input
                  type="radio"
                  name="living_will"
                  value="no"
                  className="ml-4 mr-2"
                />{" "}
                No
                <input
                  type="radio"
                  name="living_will"
                  value="unknown"
                  className="ml-4 mr-2"
                />{" "}
                Unknown
                <label className="block mt-2">Durable Power of Attorney:</label>
                <input
                  type="radio"
                  name="durable_power"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
                <input
                  type="radio"
                  name="durable_power"
                  value="no"
                  className="ml-4 mr-2"
                />{" "}
                No
                <input
                  type="radio"
                  name="durable_power"
                  value="unknown"
                  className="ml-4 mr-2"
                />{" "}
                Unknown
                <label className="block mt-2">DNR:</label>
                <input
                  type="radio"
                  name="dnr"
                  value="yes"
                  className="mr-2"
                />{" "}
                Yes
                <input
                  type="radio"
                  name="dnr"
                  value="no"
                  className="ml-4 mr-2"
                />{" "}
                No
                <input
                  type="radio"
                  name="dnr"
                  value="unknown"
                  className="ml-4 mr-2"
                />{" "}
                Unknown
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Last verified</label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Benefit Status</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Test Patient</label>
              <input type="checkbox" className="mt-1" /> Test Patient
            </div>
            <div>
              <label className="block text-gray-700">Photo</label>
              <input
                type="file"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
