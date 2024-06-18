import React from "react";

const PhysicianForm = () => {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Physician Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name *</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Middle Name</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Last Name *</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Suffix</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Maiden Name</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Date Of Birth *</label>
          <input type="date" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Birth Time</label>
          <input type="time" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Place of Birth</label>
          <input type="text" placeholder="City" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="State" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Country" defaultValue="United States of America (the)" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Mother's Maiden Name</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Other names</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add another name</button>
        </div>
        <div>
          <label className="block text-gray-700">Have Siblings?</label>
          <div className="mt-1">
            <input type="radio" name="siblings" value="yes" className="mr-2" /> Yes
            <input type="radio" name="siblings" value="no" className="ml-4 mr-2" /> No
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Record Number *</label>
          <input type="text" defaultValue="179042" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">SSN</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
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
          <label className="block text-gray-700">Enrolled as Tribe Member</label>
          <div className="mt-1">
            <input type="radio" name="tribe_member" value="yes" className="mr-2" /> Yes
            <input type="radio" name="tribe_member" value="no" className="ml-4 mr-2" /> No
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Marital Status</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Salutation</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Employer</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Enter a few characters to filter the list" />
        </div>
        <div>
          <label className="block text-gray-700">Occupation</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Industry</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Occupation date</label>
          <input type="date" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">to</label>
          <input type="date" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Pref Language</label>
          <select className="w-full mt-1 p-2 border border-gray-300 rounded">
            <option value="english">English</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Pref Clinic</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Status</label>
          <select className="w-full mt-1 p-2 border border-gray-300 rounded">
            <option value="active">Active</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Date Of Death</label>
          <input type="date" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Cause Of Death</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Advance Directives</label>
          <div className="mt-1">
            <label className="block">Living Will:</label>
            <input type="radio" name="living_will" value="yes" className="mr-2" /> Yes
            <input type="radio" name="living_will" value="no" className="ml-4 mr-2" /> No
            <input type="radio" name="living_will" value="unknown" className="ml-4 mr-2" /> Unknown
            <label className="block mt-2">Durable Power of Attorney:</label>
            <input type="radio" name="durable_power" value="yes" className="mr-2" /> Yes
            <input type="radio" name="durable_power" value="no" className="ml-4 mr-2" /> No
            <input type="radio" name="durable_power" value="unknown" className="ml-4 mr-2" /> Unknown
            <label className="block mt-2">DNR:</label>
            <input type="radio" name="dnr" value="yes" className="mr-2" /> Yes
            <input type="radio" name="dnr" value="no" className="ml-4 mr-2" /> No
            <input type="radio" name="dnr" value="unknown" className="ml-4 mr-2" /> Unknown
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Last verified</label>
          <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Benefit Status</label>
          <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Test Patient</label>
          <input type="checkbox" className="mt-1" /> Test Patient
        </div>
        <div>
          <label className="block text-gray-700">Photo</label>
          <input type="file" className="w-full mt-1 p-2 border border-gray-300 rounded" />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </form>
  );
};

export default PhysicianForm;
