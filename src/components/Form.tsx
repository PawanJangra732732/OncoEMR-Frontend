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
import { referring_providers } from "@/app/data/referring-provider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { CheckboxWithText } from "@/components/check-box";
import axios from "axios";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BACKEND_URL } from "@/lib/env";

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
  city: z.string().min(1, { message: "required" }),
  state: z.string().min(1, { message: "required" }),
  insurance_company: z
    .string()
    .min(2, "please provide a valid insurance company name"),
  insurance_member_id: z
    .string()
    .min(2, "please provide a valid insurance member id"),
  effective_date_of_insurance: z.string().date().optional(),
  preferred_contact_method: z.string(),
  referring_provider: z.string(),
  date_of_birth: z.string().date(),
  sex: z.string().min(2, "field is required"),
});

export default function CustomForm() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
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
      const response = await axios.post(BACKEND_URL, values);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-5xl  mx-auto m-6 p-6 shadow-md dark:shadow-emerald-50 dark:shadow-sm rounded space-y-8 text-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-x-8 md:gap-y-4">
          <FormField
            control={form.control}
            name="physician"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Physician</FormLabel>
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
            name="referring_provider"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Referring Provider</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Referring Provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Referring Provider</SelectLabel>
                        {referring_providers.map(({ name }, i) => (
                          <SelectItem key={i} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <Popover open={open}  onOpenChange={setOpen} {...field}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                      >
                        {value
                          ? referring_providers.find(
                              (referring_provider) =>
                                referring_provider.name === value
                            )?.name
                          : "Select referring_provider..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search referring_provider..." />
                        <CommandEmpty>
                          No referring_provider found.
                        </CommandEmpty>
                        <CommandGroup>
                          {referring_providers.map((referring_provider) => (
                            <CommandItem
                              key={referring_provider.name}
                              value={referring_provider.name}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === referring_provider.name
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {referring_provider.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">First Name*</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Middle Name</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Last Name*</FormLabel>
                <FormControl>
                  <Input placeholder="last name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile_number"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Mobile Number</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Email</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">
                  Preferred Contact Method*
                </FormLabel>
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
            name="sex"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Birth Sex*</FormLabel>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Date Of Birth*</FormLabel>
                <FormControl>
                  <Input placeholder="Date of Birth" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address_line_1"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-1 flex gap-2 items-center">
                <FormLabel className="mt-2 w-32">Address Line 1</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">City</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">State</FormLabel>
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
            name="insurance_company"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Insurance Company</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">Insurance Member ID</FormLabel>
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
              <FormItem className="flex items-center gap-2">
                <FormLabel className="mt-2 w-32">
                  Effective Date of Insurance
                </FormLabel>
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

          <div className="col-span-1 md:col-span-1 mt-2"></div>
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
