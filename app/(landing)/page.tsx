import Footer from "@/app/(landing)/_components/footer";
import Header from "./_components/header";
import PaymentService from "./_components/payment-service";
import AskingMember from "@/components/asking-member";
import AnimatedMemory from "./_components/animated-memory";
import SecureSpot from "./_components/secure-spot";
import Navbar from "./_components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <PaymentService />
      <AnimatedMemory />
      <SecureSpot />
      <AskingMember />
      <Footer />
    </>
  );
}
