import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonPrimary } from "../../../assets/Buttons";
import InputText from "../../../assets/InputText";
import { updateProfile } from "../../../store/store";
import { useThunk } from "../../../hooks/useThunk";

export default function Profile() {
  const { user, isLoading, } = useAuth0();
  const [doUpdateGivenName] = useThunk(updateProfile);
  const [givenName, setGivenName] = useState('');

  const handleChangeGivenName = (newGivenName) => {
    setGivenName(newGivenName);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await doUpdateGivenName({
      userId: user.sub,
      data: {
        "given_name": givenName,
      },
      // token: ""
    })
  }


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <form action="/settings/profile" className="lm-tx-900 dark:dm-tx-100 transition duration-300" onSubmit={handleSubmit}>
        <div className="px-6 py-4">
          <h2 className="text-xl font-medium">
            Profile
          </h2>
          <p className="text-sm lm-tx-700 mb-8 dark:dm-tx-300 transition duration-300">Update how you interact with Flocus</p>
          <div className="flex gap-2 mb-4 ">
            <p>Picture</p>
          </div>
          <div className="flex gap-2 mb-4">
            <p>Email</p>
            <InputText name="email" value={user.email} />
          </div>
          <div className="flex gap-2 mb-4">
            <p>First Name</p>
            <InputText name="given_name" value={user.given_name || ''} onChange={handleChangeGivenName} />
          </div>
          <div className="flex gap-2 mb-4">
            <p>Last Name</p>
            <InputText name="family_name" value={user.family_name} />
          </div>
          <div className="flex gap-2 mb-4">
            <p>Phone Number</p>
            <InputText name="phone_number" value={user.family_name} />
          </div>
        </div >
        <ButtonPrimary />
      </form>
    </>
  );
};