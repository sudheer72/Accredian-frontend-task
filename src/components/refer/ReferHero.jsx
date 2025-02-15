import React, { useState } from "react";
import { Button, Modal, TextInput, Label } from "flowbite-react";
import axios from "axios";
import referHeroImg from "../../assets/referHero.png"; // Ensure correct path

const ReferHero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        formData,
        { headers: { "Content-Type": "application/json" } } // ✅ Fixed Axios Request
      );

      if (response.status === 200) {
        alert("Referral Sent Successfully!");
        setOpenModal(false);
        setFormData({ name: "", email: "", company: "" });
      } else {
        throw new Error("Failed to send referral.");
      }
    } catch (error) {
      alert("Failed to send referral.");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-xl text-white flex flex-col md:flex-row items-center gap-6 mt-10">
      {/* Left Side Content */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold">Refer and Earn</h1>
        <p className="text-lg">Invite your friends and get rewards.</p>
        <Button className="mt-4 bg-white text-purple-500" onClick={() => setOpenModal(true)}>
          Refer Now
        </Button>
      </div>

      {/* Right Side Image */}
      <img src={referHeroImg} alt="Refer and Earn" className="w-1/2 h-auto rounded-lg" />

      {/* Referral Form Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Refer a Friend</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <div>
              <Label value="Name" />
              <TextInput name="name" placeholder="Enter Name" onChange={handleChange} required />
            </div>
            <div>
              <Label value="Email" />
              <TextInput name="email" type="email" placeholder="Enter Email" onChange={handleChange} required />
            </div>
            <div>
              <Label value="Company Name" />
              <TextInput name="company" placeholder="Enter Company Name" onChange={handleChange} required />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-purple-500 text-white" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit Referral"}
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReferHero;
