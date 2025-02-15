import { Alert, Button, Label, Modal, TextInput } from "flowbite-react";
import React from "react";
import referHeroImg from "../assets/referHero.png";
import money from "../assets/money.png";
import CustomizedProgressBars from "../components/spinner/CustomizedProgressBars";
import { MdEmail } from "react-icons/md";
import { FaUser, FaUserFriends } from "react-icons/fa";

function Referral({ openModal, setOpenModal }) {
  const [formData, setFormData] = React.useState({});
  const [publishError, setPublishError] = React.useState(null);
  const [referSuccess, setReferSuccess] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/referral/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        setLoading(false);
        return;
      }

      setPublishError(null);
      setReferSuccess("🎉 Thank you for your referral!");
      setLoading(false);
      setFormData({});
      
      setTimeout(() => setReferSuccess(null), 60000);
    } catch (error) {
      setPublishError("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size="4xl">
      <Modal.Header className="text-[#FF6B6B] font-bold">
        Refer & Earn Rewards 💰
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFF4E0] relative overflow-hidden">
          {/* Left - Form Section */}
          <div className="px-10 py-5 flex justify-center items-center">
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
              {publishError && <Alert className="mt-5" color="failure">{publishError}</Alert>}
              <Label className="text-[#FF6B6B] font-medium">Your Name</Label>
              <TextInput 
                type="text" 
                id="referredBy" 
                placeholder="Enter your name" 
                required 
                addon={<FaUser size="20" />} 
                onChange={handleChange} 
                value={formData.referredBy || ""}
                className="focus:ring-0 border-[#FF6B6B]"
              />

              <Label className="text-[#FF6B6B] font-medium">Friend's Name</Label>
              <TextInput 
                type="text" 
                id="name" 
                placeholder="Enter friend's name" 
                required 
                addon={<FaUserFriends size="20" />} 
                onChange={handleChange} 
                value={formData.name || ""}
                className="focus:ring-0 border-[#FF6B6B]"
              />

              <Label className="text-[#FF6B6B] font-medium">Friend's Email</Label>
              <TextInput 
                type="email" 
                id="email" 
                placeholder="friend@company.com" 
                required 
                addon={<MdEmail size="20" />} 
                onChange={handleChange} 
                value={formData.email || ""}
                className="focus:ring-0 border-[#FF6B6B]"
              />

              {referSuccess && <Alert className="mt-5" color="success">{referSuccess}</Alert>}
              
              {loading ? (
                <CustomizedProgressBars />
              ) : (
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-semibold rounded-md px-4 py-2 transition-all duration-300 hover:opacity-80 focus:ring-0"
                  disabled={loading}
                >
                  Refer Now 🚀
                </Button>
              )}
            </form>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex justify-center items-center bg-[#FFD93D]">
            <img src={referHeroImg} alt="Refer Hero" className="max-w-xs md:max-w-sm" />
            <img src={money} alt="money" className="hidden md:block absolute bottom-10 left-10 w-14 h-14 rotate-90" />
            <img src={money} alt="money" className="hidden md:block absolute top-8 right-10 w-14 h-14 rotate-180" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Referral;
