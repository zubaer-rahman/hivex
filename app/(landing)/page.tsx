import Footer from "@/components/footer";
import Header from "./_components/header";
import PaymentService from "./_components/payment-service";
import AskingMember from "@/components/asking-member";
import AnimatedMemory from "./_components/animated-memory";
import SecureSpot from "./_components/secure-spot";

export default function LandingPage() {
  return (
    <>
      <Header />
      <PaymentService />
      <AnimatedMemory />
      <SecureSpot />
      {/* <AskingMember />
      <Footer /> */}
    </>
  );
}
