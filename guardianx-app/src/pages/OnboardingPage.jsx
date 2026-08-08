import { useState } from "react";

import VehicleRegistration from "../flow/VehicleRegistration";
import DriverDetails from "../flow/DriverDetails";
import RegistrationSuccess from "../flow/RegistrationSuccess";

function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState(null);

  const handleVehicleNext = (data) => {
    setVehicle(data);
    setStep(2);
  };

  const handleDriverNext = (data) => {
    setVehicle(data);
    setStep(3);
  };

  const handleFinish = () => {
    window.location.href = "/dashboard";
  };

  if (step === 1) {
    return (
      <VehicleRegistration
        onNext={handleVehicleNext}
      />
    );
  }

  if (step === 2) {
    return (
      <DriverDetails
        vehicle={vehicle}
        onNext={handleDriverNext}
      />
    );
  }

  return (
    <RegistrationSuccess
      vehicle={vehicle}
      onContinue={handleFinish}
    />
  );
}

export default OnboardingPage;